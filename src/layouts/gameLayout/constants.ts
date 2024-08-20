import aztecBg from "/img/backgrounds/aztec.webp";
import caveBg from "/img/backgrounds/cave.webp";
import cyberBg from "/img/backgrounds/cyber.webp";
import endBg from "/img/backgrounds/end.webp";
import knightBg from "/img/backgrounds/knight.webp";
import steamBg from "/img/backgrounds/steam.webp";
import todayBg from "/img/backgrounds/today.webp";

import { gradients } from "@lib/theme/colors";
import bg from "@assets/bg.svg";
import { ThemeType } from "@store/ui/types";
export const background = {
  default: `url(${bg}), ${gradients.mainBg}`,
};

export const backgrounds: Record<ThemeType, string> = {
  default: `url(${bg}), ${gradients.mainBg}`,
  cave: `url(${caveBg})`,
  aztec: `url(${aztecBg})`,
  knight: `url(${knightBg})`,
  steam: `url(${steamBg})`,
  today: `url(${todayBg})`,
  cyber: `url(${cyberBg})`,
  end: `url(${endBg})`,
};

export const pauseButtonBgColor = {
  default: "#19547B",
};

export const pauseButtonShadowColor = {
  default: "#133F5C",
};
