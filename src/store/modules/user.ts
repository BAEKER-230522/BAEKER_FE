import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId : null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state: any, action) => {
      state.userId = action.payload;
    },
    logout: (state: any) => {
      state.userId = null;
    },
  },
});

export const { login, logout } = userSlice.actions; // 액션 생성 함수
export default userSlice.reducer; // 리듀성
