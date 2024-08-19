export const gameStateName = "game";

export type GameState = {
  pairs: number;
  moves: number;
  timer: number | null;
  size: number;
};

export type StoreWithGameState = {
  [gameStateName]: GameState;
};
