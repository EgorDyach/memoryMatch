import { GameState, gameStateName, StoreWithGameState } from "./types";

const getState = (store: StoreWithGameState): GameState => store[gameStateName];

export const getMoves = (s: StoreWithGameState): number => getState(s).moves;

export const getPairs = (s: StoreWithGameState): number => getState(s).pairs;

export const getTime = (s: StoreWithGameState): number | null =>
  getState(s).timer;

export const getSize = (s: StoreWithGameState): number => getState(s).size;
