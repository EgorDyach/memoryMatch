export type Game = {
  id: number;
  number: number;
  currentIteration: number;
  maxIterations: number;
  duration: string;
  cards: Card[];
  levelPrize: LevelPrize;
};

export type Card = {
  id: number;
  gameId: number;
  row: number;
  column: number;
  isVisible: boolean;
  cardTypeId: number;
  cardType: CardType;
  game: CardGame;
};

export type LevelPrize = {
  id: number;
  count: number;
  levelPrizeType: number;
};

export type CardType = {
  id: number;
  name: string;
  cards: string[];
  locationId: number;
  location: CardLocation;
};

export type CardLocation = {
  id: number;
  number: number;
  name: string;
  gameLevels: string[];
  users: UserLocation[];
  cardTypes: string[];
};
export type UserLocation = {
  userId: number;
  user: string;
  locationId: number;
  location: string;
  isAvailable: boolean;
};
export type User = {
  id: number;
  gold: number;
  gem: number;
  firstName: string;
  lastName: string;
  username: string;
  boosts: GameBoost[];
  games: string[];
  locations: UserLocation[];
};

export type CardGame = {
  id: number;
  currentIteration: number;
  endTimeStamp: string;
  pauseTimeStamp: string;
  state: number;
  firstSelectedCardId: number;
  firstSelectedCard: string;
  gameLevelId: number;
  gameLevel: CardGameLevel;
  userId: number;
  user: User;
  cards: string[];
};

export type CardGameLevel = {
  id: number;
  number: number;
  maxIterations: number;
  duration: string;
  levelPrize: LevelPrize;
  locationId: number;
  location: CardLocation;
  fieldSizeId: number;
  fieldSize: CardGameFieldSize;
  games: string[];
};

export type CardGameFieldSize = {
  id: number;
  rows: number;
  columns: number;
  gameLevels: string[];
};

export type GameResponse = Promise<Game>;

export type GameBoost = {
  type: number;
  count: string;
};
