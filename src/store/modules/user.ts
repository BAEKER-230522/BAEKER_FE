import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  memberId: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state: any, action) => {
      state.isLogin = true;
      state.memberId = action.payload;
    },
    logout: (state: any) => {
      state.isLogin = false;
      state.memberId = null;
    },
  },
});

export const { login, logout } = userSlice.actions; // 액션 생성 함수
export default userSlice.reducer; // 리듀성
