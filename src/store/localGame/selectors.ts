import {
  LocalGameState,
  localGameStateName,
  StoreWithLocalGameState,
} from "./types";

const getState = (store: StoreWithLocalGameState): LocalGameState =>
  store[localGameStateName];

export const getMoves = (s: StoreWithLocalGameState): number =>
  getState(s).moves;

export const getPairs = (s: StoreWithLocalGameState): number =>
  getState(s).pairs;

export const getTime = (s: StoreWithLocalGameState): number | null =>
  getState(s).timer;

export const getSize = (s: StoreWithLocalGameState): number => getState(s).size;
