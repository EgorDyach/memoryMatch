import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { levelGameStateName } from "./types";
import { levelGameInitialState } from "./constants";
import { Card } from "@type/game";

const gameSlice = createSlice({
  name: levelGameStateName,
  initialState: levelGameInitialState,
  reducers: {
    setMovesUsed(state, { payload }: PayloadAction<number | null>) {
      state.movesUsed = payload;
    },
    setMovesUsedPlusOne(state) {
      if (state.movesUsed !== null) state.movesUsed = state.movesUsed + 1;
    },
    setMaxMoves(state, { payload }: PayloadAction<number | null>) {
      state.maxMoves = payload;
    },
    setPairsMinusOne(state) {
      if (state.pairs !== null) state.pairs = state.pairs - 1;
    },
    setPairs(state, { payload }: PayloadAction<number | null>) {
      state.pairs = payload;
    },
    setInitialTimer(state, { payload }: PayloadAction<number | null>) {
      state.initialTimer = payload;
    },
    setCards(state, { payload }: PayloadAction<Card[][]>) {
      state.cards = payload;
    },
    setGameLevelId(state, { payload }: PayloadAction<number | null>) {
      state.gameLevelId = payload;
    },
    setId(state, { payload }: PayloadAction<number | null>) {
      state.id = payload;
    },
    setSeasonId(state, { payload }: PayloadAction<number | null>) {
      state.seasonId = payload;
    },
    setBackpath(state, { payload }: PayloadAction<string>) {
      state.backpath = payload;
    },
  },
});

export const { name, reducer, actions } = gameSlice;
