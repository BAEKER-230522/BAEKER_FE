import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabState: 0,
};

const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    changeTabState: (state: any, action) => {
      state.tabState = action.payload;
    },
  },
});

export const { changeTabState } = tabSlice.actions;
export default tabSlice.reducer;
