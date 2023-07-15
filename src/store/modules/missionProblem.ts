import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IinitialState {
  missionProblemState:MissionProblem[]
}

interface MissionProblem {
  idx: number;
  num: string;
  link: string;
  remove: string;
}

const initialState:IinitialState = {
  missionProblemState : []
}

const missionProblemSlice = createSlice({
  name: 'missionProblem',
  initialState,
  reducers: {
    addProblem: (state, action: PayloadAction<MissionProblem>) => {
      const { idx, num, link, remove } = action.payload;
      state.missionProblemState.push({ idx, num, link, remove });
    },
    removeProblem: (state, action: PayloadAction<number>) => {
      const idx = action.payload;
      state.missionProblemState = state.missionProblemState.filter((problem) => problem.idx !== idx);
      const temp = state.missionProblemState;
      state.missionProblemState = [];
      temp.forEach((e, idx) => {
        console.log(e, idx);
        state.missionProblemState.push({ 'idx': idx+1, 'num':e.num, 'link':e.link, 'remove':e.remove });
      })

      // [{
      //  "idx" : 1,
      //  "num" : 1000,  
      //  "link" : "https://www.acmicpc.net/problem/1001",
      //  "remove" : "삭제"
      // }]
      //
    },
    resetProblems: (state) => {
      console.log('reset');
      state.missionProblemState = [];
    },
  },
});

export const { addProblem, removeProblem, resetProblems } = missionProblemSlice.actions;
export default missionProblemSlice.reducer;