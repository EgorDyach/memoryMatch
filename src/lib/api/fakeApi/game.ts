import { Game, GameResponse } from "@type/game";

const fakeResponse: Game = {
  id: 10,
  gameLevelId: 1,
  state: 0,
  movesUsed: 0,
  maxMoves: 20,
  startTimestamp: "2024-08-24T23:17:29.715265+00:00",
  endTimestamp: "2024-08-24T23:22:29.715305+00:00",
  cards: [
    [
      {
        id: 145,
        isFlipped: false,
        cardTypeId: 1,
      },
      {
        id: 146,
        isFlipped: false,
        cardTypeId: 2,
      },
      {
        id: 147,
        isFlipped: false,
        cardTypeId: 3,
      },
      {
        id: 148,
        isFlipped: false,
        cardTypeId: 4,
      },
    ],
    [
      {
        id: 149,
        isFlipped: false,
        cardTypeId: 1,
      },
      {
        id: 150,
        isFlipped: false,
        cardTypeId: 8,
      },
      {
        id: 151,
        isFlipped: false,
        cardTypeId: 3,
      },
      {
        id: 152,
        isFlipped: false,
        cardTypeId: 5,
      },
    ],
    [
      {
        id: 153,
        isFlipped: false,
        cardTypeId: 5,
      },
      {
        id: 154,
        isFlipped: false,
        cardTypeId: 6,
      },
      {
        id: 155,
        isFlipped: false,
        cardTypeId: 7,
      },
      {
        id: 156,
        isFlipped: false,
        cardTypeId: 2,
      },
    ],
    [
      {
        id: 157,
        isFlipped: false,
        cardTypeId: 8,
      },
      {
        id: 158,
        isFlipped: false,
        cardTypeId: 7,
      },
      {
        id: 159,
        isFlipped: false,
        cardTypeId: 4,
      },
      {
        id: 160,
        isFlipped: false,
        cardTypeId: 6,
      },
    ],
  ],
};

export const fakeStartGame = async (
  levelNumber: number | string,
  seasonId: number | string,
  isError?: boolean
): GameResponse => {
  return new Promise((response, reject) => {
    console.log(levelNumber, seasonId);
    setTimeout(() => {
      if (isError) reject(new Error("some error"));
      response(fakeResponse);
    }, 300);
  });
};
