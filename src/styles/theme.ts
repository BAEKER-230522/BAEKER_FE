
const lightTheme = {
  bg_element : "#FFFFFF",
  bg_element2 : "#EEEEEE",
  bg_element3 : '#f8f9fa',
  bg_element4: "#1877FF", // (버튼)
  text1: "#000000", 
  text2: "#FFFFFF", // (버튼)
  border: "#EEEEEE",
  borderRadius: '7px',
  
  
}   

const darkTheme = {
  bg_element : "#121212",
  bg_element2 : "#1E1E1E",
  bg_element3 : '#1B1B1B',
  bg_element4: "#BB86FC",
  text1: "#E1E1E1",
  text2 : "#000000",
  border: "#555555",
  borderRadius: '7px',
  
  
}

export const theme = {
  lightTheme,
  darkTheme
}

// const calcRem = (size:number) => `${size / 16}rem`;

// export const theme: DefaultTheme = {
//   border: {
//     gray: "#EEEEEE",
//   },
//   colors : {
//     black: "#000000",
//     white: "#FFFFFF",
//     gray_1: "#BFBFBF",
//     gray_2: "#767676",
//     blue: "#1877FF",
//     border: "#F4F4F4",
//   },
//   borderRadius : {
//     primary : '7px',
//   },
//   bg_elements: {
//     white: "#FFFFFF",
//     black: "#000000",
//     red: "#F5222D",
//     blue: "#1877FF",
//     gray: "#EEEEEE",
//     gray_2 :"#F0F2F5",
//     gray_3 :"#F7F8F9",
//     gray_4 : "#FAFAFA",
//   },
//   fontSize: {
//     small: calcRem(14),
//     base: calcRem(16),
//     lg: calcRem(18),
//     xl: calcRem(20),
//     xxl: calcRem(22),
//     xxxl: calcRem(24),
//     titleSize: calcRem(50),
//   },
//   margins: {
//     small: calcRem(8),
//     base: calcRem(10),
//     lg: calcRem(12),
//     xl: calcRem(14),
//     xxl: calcRem(16),
//     xxxl: calcRem(18),
//   },
// };