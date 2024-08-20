export const levelGameStateName = "levelGame";

export type LevelGameState = {
  pairs: number;
  moves: number;
  timer: number | null;
  size: number;
};

export type StoreWithLevelGameState = {
  [levelGameStateName]: LevelGameState;
};
