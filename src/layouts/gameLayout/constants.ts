import aztecBg from "/img/backgrounds/aztec.webp";
import caveBg from "/img/backgrounds/cave.webp";
import cyberBg from "/img/backgrounds/cyber.webp";
import endBg from "/img/backgrounds/end.webp";
import knightBg from "/img/backgrounds/knight.webp";
import steamBg from "/img/backgrounds/steam.webp";
import todayBg from "/img/backgrounds/today.webp";
import { gradients } from "@lib/theme/colors";
import bg from "@assets/bg.svg";

export const backgrounds: string[] = [
  `url(${bg}), ${gradients.mainBg}`,
  `url(${caveBg})`,
  `url(${aztecBg})`,
  `url(${knightBg})`,
  `url(${steamBg})`,
  `url(${todayBg})`,
  `url(${cyberBg})`,
  `url(${endBg})`,
];
