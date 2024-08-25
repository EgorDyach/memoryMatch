import { ButtonType } from "./../components/button/Button";
export type Season = {
  id: number;
  title: string;
  description: string;
  image: string;
  rewards: {
    coins: number;
    diamonds: number;
  };
  colors: {
    backgroundColor: string;
    contentColor: string;
    descriptionColor: string;
    descriptionShadowColor?: string;
    titleColor: string;
    titleShadowColor?: string;
    ButtonType: ButtonType;
    progressBarColor1: string;
    progressBarColor2: string;
    progressBarBgColor: string;
  };
};

export type Map = {
  id: number;
  title: string;
  colors: {
    percentBackgroundColor: string;
    backgroundColor: string;
    titleColor: string;
    titleShadowColor?: string;
    percentShadowColor?: string;
  };
  levels: MapLevel[];
};

export type MapLevel = {
  id: number;
  positionX: number;
  positionY: number;
  reward: MapReward | null;
};

type MapReward = {
  placement: "top" | "left" | "bottom" | "right";
  type: "coin" | "diamond" | "fragment";
  count: number;
};

export type ShortLevel = {
  id: number;
  number: number;
  isCompleted: boolean;
};
