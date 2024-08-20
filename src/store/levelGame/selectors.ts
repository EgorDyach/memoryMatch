import {
  LevelGameState,
  levelGameStateName,
  StoreWithLevelGameState,
} from "./types";

const getState = (store: StoreWithLevelGameState): LevelGameState =>
  store[levelGameStateName];

export const getMoves = (s: StoreWithLevelGameState): number =>
  getState(s).moves;

export const getPairs = (s: StoreWithLevelGameState): number =>
  getState(s).pairs;

export const getTime = (s: StoreWithLevelGameState): number | null =>
  getState(s).timer;

export const getSize = (s: StoreWithLevelGameState): number => getState(s).size;
