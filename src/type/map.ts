import { ButtonType } from "./../components/button/Button";
export type Season = {
  id: number;
  title: string;
  description: string;
  image: string;
  has_access: boolean;
  current_level: number;
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
