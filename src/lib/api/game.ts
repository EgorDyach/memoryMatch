import { GameResponse } from "@type/game";
import { request } from ".";

export const requestStartGame$ = async (
  gameNumber: number | string,
  locationId: number | string
): GameResponse => {
  return await request.post("/game/start", { gameNumber, locationId });
};
export const requestPauseGame$ = async (
  gameId: number | string
): GameResponse => {
  return await request.post("/game/pause", { gameId });
};
export const requestUnpauseGame$ = async (
  gameId: number | string
): GameResponse => {
  return await request.post("/game/unpause", { gameId });
};
export const requestRestartGame$ = async (
  gameId: number | string
): GameResponse => {
  return await request.post("/game/restart", { gameId });
};
export const requestAbortGame$ = async (
  gameId: number | string
): GameResponse => {
  return await request.post("/game/abort", { gameId });
};
export const requestFlipCard$ = async (
  gameId: number | string,
  cardId: number | string
): GameResponse => {
  return await request.post("/game/flip-card", { gameId, cardId });
};

export const requestUseBoost$ = async (
  gameId: number | string,
  boostType: number | string,
  cardId: number | string
): GameResponse => {
  return await request.post("/game/use-boost", { gameId, boostType, cardId });
};
