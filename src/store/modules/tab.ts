import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profileTabState: 0,
  memberTabState: 0,
  studyTabState: 0,
};

const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    changeProfileTabState: (state: any, action) => {
      state.profileTabState = action.payload;
    },
    changeStudyTabState: (state: any, action) => {
      state.studyTabState = action.payload;
    },
    changeMemberTabState: (state: any, action) => {
      state.memberTabState = action.payload;
    },
  },
});

export const { changeProfileTabState, changeStudyTabState, changeMemberTabState } = tabSlice.actions;
export default tabSlice.reducer;
