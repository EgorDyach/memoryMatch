export const localGameStateName = "localGame";

export type LocalGameState = {
  pairsP1: number;
  cardsP1: LocalGameCard[];
  pairsP2: number;
  cardsP2: LocalGameCard[];
  size: number;
};

export type StoreWithLocalGameState = {
  [localGameStateName]: LocalGameState;
};

export type LocalGameCard = {
  season: number;
  id: number;
  imgId: number;
  random: number;
  isFlipped: boolean;
};
