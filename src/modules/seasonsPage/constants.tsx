import { Season } from "@type/map";
import aztec from "/img/seasons/aztec.jpg";
import next from "/img/seasons/next.jpg";

export const TOTAL_LEVELS = 40;

export const seasons: Season[] = [
  {
    id: 0,
    title: "Aztec world",
    image: aztec,
    has_access: true,
    current_level: 20,
    rewards: {
      coins: 5,
      diamonds: 10,
    },
    description:
      "Lor-text for this world. Lor-text for this world. Lor-text for this world. Lor-text for this world. Lor-text for this world. Lor-text for this world. ",
    colors: {
      backgroundColor: "#E3B499",
      contentColor: "#EEE5DD",
      descriptionColor: "",
      descriptionShadowColor: "#754A2C",
      titleColor: "#fff",
      titleShadowColor: "#754A2C",
      ButtonType: "yellow",
      progressBarColor1: "#E7B373",
      progressBarColor2: "#754A2C",
      progressBarBgColor: "#4D301B",
    },
  },
  {
    id: 1,
    title: "Next world",
    image: next,
    has_access: false,
    current_level: 0,
    rewards: {
      coins: 5,
      diamonds: 10,
    },
    description:
      "Lor-text for this world. Lor-text for this world. Lor-text for this world. Lor-text for this world. Lor-text for this world. Lor-text for this world. ",
    colors: {
      backgroundColor: "#A3E399",
      contentColor: "#DDEEDE",
      descriptionColor: "#36752C",
      titleColor: "#fff",
      titleShadowColor: "#36752C",
      ButtonType: "yellow",
      progressBarColor1: "#E7B373",
      progressBarColor2: "#36752C",
      progressBarBgColor: "#4D301B",
    },
  },
];
