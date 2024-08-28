import { GameResponse } from "@type/game";
import { request } from ".";

export const requestStartGame$ = async (
  gameNumber: number | string,
  locationId: number | string
): GameResponse => {
  return await request.post("/game/start", { gameNumber, locationId });
};
