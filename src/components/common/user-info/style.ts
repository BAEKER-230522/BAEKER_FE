import styled from "styled-components";
import { themedPalette } from "@/styles/theme";

const Container = styled.div`
  width: 280px;
  height: 300px;
  background-color: ${themedPalette.bg_element2};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 7px;
  margin: 5px;
`;

const Image = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background-color: aqua;
`;

const BigFont = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: ${themedPalette.text3};
  margin-bottom: 20px;
`;

const SmallFont = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${themedPalette.text1};
  margin-bottom: 20px;
  margin-left: 3px;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  width: 120px;
  height: 40px;
  background-color: ${themedPalette.bg_element4};
  border-radius: 10px;
  color: ${themedPalette.text2};
  font-weight: 600;
  border: none;
  cursor: pointer;
`;

const Name = styled.div`
  color: ${themedPalette.text1};
  font-size: 1.2rem;
  font-weight: 600;
`;

const Title = styled.div`
  color: ${themedPalette.text1};
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Introduce = styled.p`
  color: ${themedPalette.text1};
  font-size: 1rem;
  font-weight: 600;
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${themedPalette.border};
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const S = {
  Container,
  InfoContainer,
  Image,
  Button,
  Line,
  Name,
  Introduce,
  Title,
  BigFont,
  SmallFont,
};
