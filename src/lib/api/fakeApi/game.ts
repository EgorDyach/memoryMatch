import { Game, GameResponse } from "@type/game";

const fakeResponse: Game = {
  id: 0,
  number: 0,
  currentIteration: 0,
  maxIterations: 0,
  duration: "string",
  cards: [
    {
      id: 0,
      gameId: 0,
      game: {
        id: 0,
        currentIteration: 0,
        endTimeStamp: "2024-08-20T14:50:01.209Z",
        pauseTimeStamp: "2024-08-20T14:50:01.209Z",
        state: 0,
        firstSelectedCardId: 0,
        firstSelectedCard: "string",
        gameLevelId: 0,
        gameLevel: {
          id: 0,
          number: 0,
          maxIterations: 0,
          duration: "string",
          levelPrize: {
            id: 0,
            count: 0,
            levelPrizeType: 0,
          },
          locationId: 0,
          location: {
            id: 0,
            number: 0,
            name: "string",
            gameLevels: ["string"],
            users: [
              {
                userId: 0,
                user: "string",
                locationId: 0,
                location: "string",
                isAvailable: true,
              },
            ],
            cardTypes: ["string"],
          },
          fieldSizeId: 0,
          fieldSize: {
            id: 0,
            rows: 0,
            columns: 0,
            gameLevels: ["string"],
          },
          games: ["string"],
        },
        userId: 0,
        user: {
          id: 0,
          gold: 0,
          gem: 0,
          firstName: "string",
          lastName: "string",
          username: "string",
          boosts: [
            {
              type: 0,
              count: "string",
            },
          ],
          games: ["string"],
          locations: [
            {
              userId: 0,
              user: "string",
              locationId: 0,
              location: "string",
              isAvailable: true,
            },
          ],
        },
        cards: ["string"],
      },
      row: 0,
      column: 0,
      isVisible: true,
      cardTypeId: 0,
      cardType: {
        id: 0,
        name: "string",
        cards: ["string"],
        locationId: 0,
        location: {
          id: 0,
          number: 0,
          name: "string",
          gameLevels: ["string"],
          users: [
            {
              userId: 0,
              user: "string",
              locationId: 0,
              location: "string",
              isAvailable: true,
            },
          ],
          cardTypes: ["string"],
        },
      },
    },
    {
      id: 0,
      gameId: 0,
      game: {
        id: 0,
        currentIteration: 0,
        endTimeStamp: "2024-08-20T14:50:01.209Z",
        pauseTimeStamp: "2024-08-20T14:50:01.209Z",
        state: 0,
        firstSelectedCardId: 0,
        firstSelectedCard: "string",
        gameLevelId: 0,
        gameLevel: {
          id: 0,
          number: 0,
          maxIterations: 0,
          duration: "string",
          levelPrize: {
            id: 0,
            count: 0,
            levelPrizeType: 0,
          },
          locationId: 0,
          location: {
            id: 0,
            number: 0,
            name: "string",
            gameLevels: ["string"],
            users: [
              {
                userId: 0,
                user: "string",
                locationId: 0,
                location: "string",
                isAvailable: true,
              },
            ],
            cardTypes: ["string"],
          },
          fieldSizeId: 0,
          fieldSize: {
            id: 0,
            rows: 0,
            columns: 0,
            gameLevels: ["string"],
          },
          games: ["string"],
        },
        userId: 0,
        user: {
          id: 0,
          gold: 0,
          gem: 0,
          firstName: "string",
          lastName: "string",
          username: "string",
          boosts: [
            {
              type: 0,
              count: "string",
            },
          ],
          games: ["string"],
          locations: [
            {
              userId: 0,
              user: "string",
              locationId: 0,
              location: "string",
              isAvailable: true,
            },
          ],
        },
        cards: ["string"],
      },
      row: 0,
      column: 0,
      isVisible: true,
      cardTypeId: 0,
      cardType: {
        id: 0,
        name: "string",
        cards: ["string"],
        locationId: 0,
        location: {
          id: 0,
          number: 0,
          name: "string",
          gameLevels: ["string"],
          users: [
            {
              userId: 0,
              user: "string",
              locationId: 0,
              location: "string",
              isAvailable: true,
            },
          ],
          cardTypes: ["string"],
        },
      },
    },
  ],
  levelPrize: {
    id: 0,
    count: 0,
    levelPrizeType: 0,
  },
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
