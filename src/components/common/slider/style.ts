import styled from "styled-components";
import { themedPalette } from "@/styles/theme";

const Container = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Title = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: ${themedPalette.text1};
  margin-bottom: 20px;
`;

const Slider = styled.input`
  accent-color: ${themedPalette.bg_element3};
  transition: 0.3s ease-in-out;
  background: ${themedPalette.bg_element3};
  width: 100%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Value = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  margin-left: 5px;
  span {
    width: 5%;
    height: 10px;
    color: ${themedPalette.text1};
  }
`;

export const S = { Container, Slider, Value, Title };
