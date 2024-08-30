import { Card } from "@type/game";

export const levelGameStateName = "levelGame";

export type LevelGameState = {
  pairs: number | null;
  maxMoves: number | null;
  movesUsed: number | null;
  gameLevelId: number | null;
  id: number | null;
  cards: Card[][];
  initialTimer: number | null;
  seasonId: null | number;
  status: null | number;
  backpath: string;
  isLoading: boolean;
  areCardsShown: boolean;
};

export type StoreWithLevelGameState = {
  [levelGameStateName]: LevelGameState;
};
