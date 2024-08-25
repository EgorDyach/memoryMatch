import { Season } from "@type/map";
import cave from "/img/backgrounds/cave.webp";
import aztec from "/img/backgrounds/aztec.webp";
import knight from "/img/backgrounds/knight.webp";
import steam from "/img/backgrounds/steam.webp";
import today from "/img/backgrounds/today.webp";
import cyber from "/img/backgrounds/cyber.webp";
import end from "/img/backgrounds/end.webp";

export const TOTAL_LEVELS = 40;

export const seasons: Season[] = [
  {
    id: 1,
    title: "Cave world",
    image: cave,
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
    id: 2,
    title: "Aztec world",
    image: aztec,
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
  {
    id: 3,
    title: "Knight world",
    image: knight,
    rewards: {
      coins: 5,
      diamonds: 10,
    },
    description:
      "Lor-text for this world. Lor-text for this world. Lor-text for this world. Lor-text for this world. Lor-text for this world. Lor-text for this world. ",
    colors: {
      backgroundColor: "#42CAC6",
      contentColor: "#e2f5f4",
      descriptionColor: "#1D9C95",
      titleColor: "#fff",
      titleShadowColor: "#1D9C95",
      ButtonType: "yellow",
      progressBarColor1: "#E7B373",
      progressBarColor2: "#1D9C95",
      progressBarBgColor: "#4D301B",
    },
  },
  {
    id: 4,
    title: "Steam world",
    image: steam,
    rewards: {
      coins: 5,
      diamonds: 10,
    },
    description:
      "Lor-text for this world. Lor-text for this world. Lor-text for this world. Lor-text for this world. Lor-text for this world. Lor-text for this world. ",
    colors: {
      backgroundColor: "#993A04",
      contentColor: "#f2e1cd",
      descriptionColor: "#B56100",
      titleColor: "#fff",
      titleShadowColor: "#B56100",
      ButtonType: "yellow",
      progressBarColor1: "#E7B373",
      progressBarColor2: "#B56100",
      progressBarBgColor: "#4D301B",
    },
  },
  {
    id: 5,
    title: "Today world",
    image: today,
    rewards: {
      coins: 5,
      diamonds: 10,
    },
    description:
      "Lor-text for this world. Lor-text for this world. Lor-text for this world. Lor-text for this world. Lor-text for this world. Lor-text for this world. ",
    colors: {
      backgroundColor: "#2167D3",
      contentColor: "#dee8f7",
      descriptionColor: "#fff",
      descriptionShadowColor: "#0B4ED0",
      titleColor: "#fff",
      titleShadowColor: "#0B4ED0",
      ButtonType: "yellow",
      progressBarColor1: "#E7B373",
      progressBarColor2: "#0B4ED0",
      progressBarBgColor: "#4D301B",
    },
  },
  {
    id: 6,
    title: "Cyber world",
    image: cyber,
    rewards: {
      coins: 5,
      diamonds: 10,
    },
    description:
      "Lor-text for this world. Lor-text for this world. Lor-text for this world. Lor-text for this world. Lor-text for this world. Lor-text for this world. ",
    colors: {
      backgroundColor: "#C521D3",
      contentColor: "#efc1f3",
      descriptionColor: "#fff",
      descriptionShadowColor: "#7C1496",
      titleColor: "#fff",
      titleShadowColor: "#7C1496",
      ButtonType: "yellow",
      progressBarColor1: "#E7B373",
      progressBarColor2: "#7C1496",
      progressBarBgColor: "#4D301B",
    },
  },
  {
    id: 7,
    title: "End world",
    image: end,
    rewards: {
      coins: 5,
      diamonds: 10,
    },
    description:
      "Lor-text for this world. Lor-text for this world. Lor-text for this world. Lor-text for this world. Lor-text for this world. Lor-text for this world. ",
    colors: {
      backgroundColor: "#FFC329",
      contentColor: "#f7ebcc",
      descriptionColor: "#C27D15",
      titleColor: "#fff",
      titleShadowColor: "#C27D15",
      ButtonType: "yellow",
      progressBarColor1: "#E7B373",
      progressBarColor2: "#C27D15",
      progressBarBgColor: "#4D301B",
    },
  },
];
