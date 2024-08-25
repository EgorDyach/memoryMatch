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
  backpath: string;
};

export type StoreWithLevelGameState = {
  [levelGameStateName]: LevelGameState;
};
