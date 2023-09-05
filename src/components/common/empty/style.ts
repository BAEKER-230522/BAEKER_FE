import styled from "styled-components";
import { themedPalette } from "@/styles/theme";

const Container = styled.div`
  background-color: ${themedPalette.bg_element};
  width: 80%;
  height: 200px;
  border-radius: 10px;
  color: ${themedPalette.text1};
  font-size: 3rem;
  font-weight: 600;
  line-height: 200px;
  text-align: center;
`;

export const S = { Container };
