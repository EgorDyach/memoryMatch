import HomeIcon from "@components/icons/HomeIcon";
import MapIcon from "@components/icons/MapIcon";
import ShopIcon from "@components/icons/ShopIcon";
import TasksIcon from "@components/icons/TasksIcon";
import VersusIcon from "@components/icons/VersusIcon";
import { seasons } from "@modules/seasonsPage/constants";

export const navBarLinks = [
  {
    icon: (color: string) => <MapIcon color={color} size={30} />,
    text: "map",
    links: ["/map", "/map/", ...seasons.map((item) => `/map/${item.id}`)],
  },
  {
    icon: (color: string) => <ShopIcon color={color} size={30} />,
    text: "shop",
    links: ["/shop"],
  },
  {
    icon: (color: string) => <HomeIcon color={color} size={30} />,
    text: "home",
    links: ["/"],
  },
  {
    icon: (color: string) => <TasksIcon color={color} size={30} />,
    text: "tasks",
    links: ["/tasks"],
  },
  {
    icon: (color: string) => <VersusIcon color={color} size={30} />,
    text: "1 vs 1",
    links: ["/versus"],
  },
];
