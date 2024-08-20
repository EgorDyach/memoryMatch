export const localGameStateName = "localGame";

export type LocalGameState = {
  pairs: number;
  moves: number;
  timer: number | null;
  size: number;
};

export type StoreWithLocalGameState = {
  [localGameStateName]: LocalGameState;
};
