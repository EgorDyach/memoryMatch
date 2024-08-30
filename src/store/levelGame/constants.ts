import { LevelGameState } from "./types";

export const levelGameInitialState: LevelGameState = {
  pairs: null,
  maxMoves: null,
  movesUsed: null,
  gameLevelId: null,
  id: null,
  cards: [],
  initialTimer: null,
  seasonId: null,
  status: null,
  backpath: "/",
  isLoading: false,
  areCardsShown: false,
};
