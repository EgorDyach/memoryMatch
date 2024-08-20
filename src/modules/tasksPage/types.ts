export type ProgressData = {
  start: number;
  current: number;
  end: number;
  rewards: ProgressReward[];
};

export type ProgressReward = {
  percent: number;
  recieved: boolean;
  count: number;
  icon: "diamond" | "coin";
};
