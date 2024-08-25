import { Card } from "@type/game";
import {
  LevelGameState,
  levelGameStateName,
  StoreWithLevelGameState,
} from "./types";

const getState = (store: StoreWithLevelGameState): LevelGameState =>
  store[levelGameStateName];

export const getMovesUsed = (s: StoreWithLevelGameState): number | null =>
  getState(s).movesUsed;

export const getMaxMoves = (s: StoreWithLevelGameState): number | null =>
  getState(s).maxMoves;

export const getPairs = (s: StoreWithLevelGameState): number | null =>
  getState(s).pairs;

export const getInitialTimer = (s: StoreWithLevelGameState): number | null =>
  getState(s).initialTimer;

export const getCards = (s: StoreWithLevelGameState): Card[][] =>
  getState(s).cards;

export const getGameId = (s: StoreWithLevelGameState): number | null =>
  getState(s).id;

export const getGameLevelId = (s: StoreWithLevelGameState): number | null =>
  getState(s).gameLevelId;

export const getSeasonId = (s: StoreWithLevelGameState): number | null =>
  getState(s).seasonId;

export const getBackpath = (s: StoreWithLevelGameState): string =>
  getState(s).backpath;
