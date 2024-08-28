import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LocalGameCard, localGameStateName } from "./types";
import { localGameInitialState } from "./constants";

const localGameSlice = createSlice({
  name: localGameStateName,
  initialState: localGameInitialState,
  reducers: {
    setPairsMinusOne(state, { payload }: PayloadAction<"1" | "2">) {
      if (payload === "1") state.pairsP1 = state.pairsP1 - 1;
      if (payload === "2") state.pairsP2 = state.pairsP2 - 1;
    },
    setPairsP1(state, { payload }: PayloadAction<number>) {
      state.pairsP1 = payload;
    },
    setPairsP2(state, { payload }: PayloadAction<number>) {
      state.pairsP2 = payload;
    },
    setCardsP1(state, { payload }: PayloadAction<LocalGameCard[]>) {
      state.cardsP1 = payload;
    },
    setCardsP2(state, { payload }: PayloadAction<LocalGameCard[]>) {
      state.cardsP2 = payload;
    },
    setSize(state, { payload }: PayloadAction<number>) {
      state.size = payload;
    },
  },
});

export const { name, reducer, actions } = localGameSlice;
