import {
  LocalGameCard,
  LocalGameState,
  localGameStateName,
  StoreWithLocalGameState,
} from "./types";

const getState = (store: StoreWithLocalGameState): LocalGameState =>
  store[localGameStateName];

export const getPairsP1 = (s: StoreWithLocalGameState): number =>
  getState(s).pairsP1;

export const getPairsP2 = (s: StoreWithLocalGameState): number =>
  getState(s).pairsP2;

export const getCardsP2 = (s: StoreWithLocalGameState): LocalGameCard[] =>
  getState(s).cardsP2;

export const getCardsP1 = (s: StoreWithLocalGameState): LocalGameCard[] =>
  getState(s).cardsP1;

export const getSize = (s: StoreWithLocalGameState): number => getState(s).size;
