export const levelGameStateName = "levelGame";

export type LevelGameState = {
  pairs: number;
  moves: number;
  timer: number | null;
  size: number;
};

export type StoreWithGameState = {
  [levelGameStateName]: LevelGameState;
};
