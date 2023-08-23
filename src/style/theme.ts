import { DefaultTheme } from "styled-components";

const calcRem = (size:number) => `${size / 16}rem`;

export const theme: DefaultTheme = {
  colors : {
    black: "#000000",
    white: "#FFFFFF",
    gray_1: "#BFBFBF",
    gray_2: "#767676",
    blue: "#1877FF",
    border: "#F4F4F4",
  },
  backgronudColors: {
    white: "#FFFFFF",
    red: "#F5222D",
    blue: "#1877FF",
    gray: "#EEEEEE",
    gray_2 :"#F0F2F5",
    gray_3 :"#F7F8F9",
    gray_4 : "#FAFAFA",
  },
  fontSize: {
    small: calcRem(14),
    base: calcRem(16),
    lg: calcRem(18),
    xl: calcRem(20),
    xxl: calcRem(22),
    xxxl: calcRem(24),
    titleSize: calcRem(50),
  },
  margins: {
    small: calcRem(8),
    base: calcRem(10),
    lg: calcRem(12),
    xl: calcRem(14),
    xxl: calcRem(16),
    xxxl: calcRem(18),
  },
};