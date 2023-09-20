import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IinitialState {
  missionProblemState: MissionProblem[];
  missionData: {};
}

interface MissionProblem {
  idx: number;
  problemNumber: string;
  problemName: string;
  remove: string;
}

const initialState: IinitialState = {
  missionProblemState: [],
  missionData: {},
};

const missionSlice = createSlice({
  name: "mission",
  initialState,
  reducers: {
    addProblem: (state, action: PayloadAction<MissionProblem>) => {
      const { idx, problemNumber, problemName, remove } = action.payload;
      state.missionProblemState.push({ idx, problemNumber, problemName, remove });
    },
    removeProblem: (state, action: PayloadAction<number>) => {
      const idx = action.payload;
      state.missionProblemState = state.missionProblemState.filter((problem) => problem.idx !== idx);
      const temp = state.missionProblemState;
      state.missionProblemState = [];
      temp.forEach((e, idx) => {
        state.missionProblemState.push({
          idx: idx + 1,
          problemNumber: e.problemNumber,
          problemName: e.problemName,
          remove: e.remove,
        });
      });
    },
    resetProblems: (state) => {
      state.missionProblemState = [];
    },
    propMissionData: (state, action) => {
      state.missionData = action.payload;
    },
  },
});

export const { addProblem, removeProblem, resetProblems, propMissionData } = missionSlice.actions;
export default missionSlice.reducer;
