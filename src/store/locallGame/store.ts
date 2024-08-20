import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { localGameStateName } from "./types";
import { localGameInitialState } from "./constants";

const localGameSlice = createSlice({
  name: localGameStateName,
  initialState: localGameInitialState,
  reducers: {
    setMoves(state, { payload }: PayloadAction<number>) {
      state.moves = payload;
    },
    setMovesMinusOne(state) {
      state.moves = state.moves - 1;
    },
    setPairsMinusOne(state) {
      state.pairs = state.pairs - 1;
    },
    setPairs(state, { payload }: PayloadAction<number>) {
      state.pairs = payload;
    },
    setTimer(state, { payload }: PayloadAction<number | null>) {
      state.timer = payload;
    },
    setSize(state, { payload }: PayloadAction<number>) {
      state.size = payload;
    },
  },
});

export const { name, reducer, actions } = localGameSlice;
