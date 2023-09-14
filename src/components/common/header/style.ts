import styled from "styled-components";
import { themedPalette } from "@/styles/theme";

const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;
  font-weight: 700;
  background-color: ${themedPalette.bg_element};
  border-bottom: 2px solid ${themedPalette.border};
  position: sticky;
  backdrop-filter: saturate(180%) blur(6px);
  top: 0;
  z-index: 1000;
  a {
    text-decoration: none;
  }
`;

const Logo = styled.h1`
  width: 70px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  color: ${themedPalette.text1};
`;

const LogoContainer = styled.div`
  margin-right: auto;
`;

const IconContainer = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 30px;
  margin-left: auto;
`;

const Button = styled.button`
  font-size: 14px;
  height: 35px;
  padding: 4px 18px;
  border-radius: 7px;
  outline: none;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-color: ${themedPalette.bg_element3};
  color: ${themedPalette.text1};
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
`;

const DropDown = styled.div`
  margin-top: 5px;
  position: absolute;
  padding: 8px 18px;
  visibility: hidden; // 초기 상태는 hidden
  width: auto;
  background-color: ${themedPalette.bg_element3};
  color: ${themedPalette.text1};
  left: -50%;
  border-radius: 7px;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out, max-height 0.3s ease-in-out; // max-height 변화에 transition 적용
  max-height: 0; // 초기 상태에서 max-height는 0
  overflow: hidden; // 내용이 max-height를 초과하면 숨김 처리
  opacity: 0; // 기본적으로 투명
  li {
    padding: 5px 8px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    white-space: nowrap;
    border-radius: 7px;
    cursor: pointer;
    background-color: ${themedPalette.bg_element3};
    &:hover {
      background-color: ${themedPalette.bg_element2};
    }
  }
`;

const DropDownContainer = styled.div`
  position: relative;
  &:hover ${DropDown} {
    visibility: visible; // 호버될 때 visible로 설정
    opacity: 1; // 호버될 때 완전히 불투명하게
    max-height: 200px;
  }
`;

export const S = { HeaderContainer, LogoContainer, Logo, IconContainer, Button, DropDown, DropDownContainer };
