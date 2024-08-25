export type Game = {
  id: number;
  gameLevelId: number;
  state: number;
  movesUsed: number;
  maxMoves: number;
  startTimestamp: string;
  endTimestamp: string;
  cards: Card[][];
};

export type Card = {
  id: number;
  isFlipped: boolean;
  cardTypeId: number | null;
};

export type LevelPrize = {
  id: number;
  count: number;
  levelPrizeType: number;
};

export type GameResponse = Promise<Game>;

export type GameBoost = {
  type: number;
  count: string;
};
