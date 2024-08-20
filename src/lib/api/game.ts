import { GameResponse } from "@type/game";
import { fakeStartGame } from "./fakeApi/game";

export const startGame$ = async (
  levelNumber: number | string,
  seasonId: number | string
): GameResponse => {
  return await fakeStartGame(levelNumber, seasonId);
};
