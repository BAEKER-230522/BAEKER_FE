import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state: any) => {
      state.isLogin = true;
    },
    logout: (state: any) => {
      state.isLogin = false;
    },
  },
});

export const { login, logout } = userSlice.actions; // 액션 생성 함수
export default userSlice.reducer; // 리듀성
