import { createSlice } from "@reduxjs/toolkit";

export const calcSlice = createSlice({
  name: "calc",
  initialState: {
    result: 0,
  },
  reducers: {
    add: (state, action) => {
      const res =
        Number(action.payload.firstNumber) +
        Number(action.payload.secondNumber);

      state.result = res;
    },

    subtract: (state, action) => {
      const res =
        Number(action.payload.firstNumber) -
        Number(action.payload.secondNumber);

      state.result = res;
    },

    multiply: (state, action) => {
      const res =
        Number(action.payload.firstNumber) *
        Number(action.payload.secondNumber);

      state.result = res;
    },

    division: (state, action) => {
      const res =
        Number(action.payload.firstNumber) /
        Number(action.payload.secondNumber);

      state.result = res;
    },
  },
});

export const { add, subtract, multiply, division } = calcSlice.actions;

export default calcSlice.reducer;
