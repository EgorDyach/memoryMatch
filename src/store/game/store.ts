import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { gameStateName } from "./types";
import { gameInitialState } from "./constants";

const gameSlice = createSlice({
  name: gameStateName,
  initialState: gameInitialState,
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

export const { name, reducer, actions } = gameSlice;
