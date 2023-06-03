import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dropdownState: [0, 0],
  count: 0,
};

const dropdownSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    changeDropdownState: (state: any, action) => {
      const crnt_state = state.dropdownState[action.payload];
      state.dropdownState = [0, 0];
      if (crnt_state === 0) {
        state.dropdownState[action.payload] = 1;
        state.count += 1;
      }
    },

    initDropdownState: (state: any) => {
      state.count = 0;
      state.dropdownState = [0, 0];
    },
  },
});

export const { changeDropdownState, initDropdownState } = dropdownSlice.actions; // 액션 생성 함수
export default dropdownSlice.reducer; // 리듀성
