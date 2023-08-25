import LocalStorage from "@/util/localstorage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: LocalStorage.getItem('isDarkMode') ? LocalStorage.getItem('isDarkMode') : 'false'
};

const darkModeSlice = createSlice({
  name: "darkmode",
  initialState,
  reducers: {
    changeDarkMode: (state: any) => {
      state.isDarkMode = !state.isDarkMode
    },
  },
});

export const { changeDarkMode } = darkModeSlice.actions; // 액션 생성 함수
export default darkModeSlice.reducer; // 리듀성
