import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nameState: "",
  aboutState: "",
  imgState: "",
};

const modifySlice = createSlice({
  name: "modify",
  initialState,
  reducers: {
    changeNameState: (state, action) => {
      state.nameState = action.payload;
    },
    changeAboutState: (state, action) => {
      state.aboutState = action.payload;
    },
  },
});

export const { changeNameState, changeAboutState } = modifySlice.actions;
export default modifySlice.reducer;
