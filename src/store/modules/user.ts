import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId : null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state: any, action) => {
      state.userId = action.payload;
      state.user
    },
    logout: (state: any) => {
      state.userId = null;
    },
  },
});

export const { loginUser, logout } = userSlice.actions; // 액션 생성 함수
export default userSlice.reducer; // 리듀성
