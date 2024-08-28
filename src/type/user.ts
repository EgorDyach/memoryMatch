export type User = {
  id: number;
  gold: number;
  gem: number;
  hearts: number;
  firstName: string;
  lastName: string;
  username: string;
  boosts: UserBoost[];
};

export type UserBoost = {
  type: number;
  count: number;
};

export type Location = {
  id: number;
  number: number;
  name: string;
  isAvailable: boolean;
};
