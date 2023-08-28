import styled from "styled-components";
import { themedPalette } from "@/styles/theme";

const Wrapper = styled.div`
  width: 400px;
  height: 300px;
  display: flex;
  justify-content: center;
  border-radius: 7px;
  padding: 10px;
  background-color: ${themedPalette.bg_element3};
`;

export const S = {
  Wrapper,
};
