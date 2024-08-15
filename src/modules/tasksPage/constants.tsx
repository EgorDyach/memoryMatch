import InstIcon from "@components/icons/InstIcon";
import TelegramIcon from "@components/icons/TelegramIcon";
import VkIcon from "@components/icons/VkIcontemp";
import XIcon from "@components/icons/XIcon";

export const socials = [
  {
    is_done: false,
    title: "Telegram",
    icon: <TelegramIcon size={38} />,
  },
  {
    is_done: true,
    title: "X/Twitter",
    icon: <XIcon size={38} />,
  },
  {
    is_done: true,
    title: "VKontakte",
    icon: <VkIcon size={38} />,
  },
  {
    is_done: false,
    title: "Instagram",
    icon: <InstIcon size={38} />,
  },
];

export const socialButtonContent: Record<string, string> = {
  true: "Completed",
  false: "Join",
};
