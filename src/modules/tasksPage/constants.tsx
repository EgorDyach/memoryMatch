import InstIcon from "@components/icons/InstIcon";
import TelegramIcon from "@components/icons/TelegramIcon";
import VkIcon from "@components/icons/VkIcon";
import XIcon from "@components/icons/XIcon";
import { ProgressData } from "./types";

export const socials = [
  {
    id: 0,
    is_done: false,
    title: "Telegram",
    icon: <TelegramIcon size={38} />,
  },
  {
    id: 1,
    is_done: false,
    title: "X/Twitter",
    icon: <XIcon size={38} />,
  },
  {
    id: 2,
    is_done: true,
    title: "VKontakte",
    icon: <VkIcon size={38} />,
  },
  {
    id: 3,
    is_done: false,
    title: "Instagram",
    icon: <InstIcon size={38} />,
  },
];

export const socialButtonContent: Record<string, string> = {
  true: "Completed",
  false: "Join",
};

export const progressData: ProgressData = {
  start: 0,
  current: 2,
  end: 4,
  rewards: [
    {
      percent: 25,
      count: 1,
      recieved: true,
      icon: "diamond",
    },
    {
      percent: 50,
      count: 1,
      recieved: false,
      icon: "diamond",
    },
    {
      percent: 70,
      count: 1,
      recieved: false,
      icon: "diamond",
    },
    {
      percent: 100,
      count: 10,
      recieved: false,
      icon: "diamond",
    },
  ],
};