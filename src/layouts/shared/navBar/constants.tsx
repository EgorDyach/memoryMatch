import HomeIcon from "@components/icons/HomeIcon";
import MapIcon from "@components/icons/MapIcon";
import ShopIcon from "@components/icons/ShopIcon";
import TasksIcon from "@components/icons/TasksIcon";
import VersusIcon from "@components/icons/VersusIcon";

export const navBarLinks = [
  {
    icon: (color: string) => <MapIcon color={color} size={30} />,
    text: "MAP",
    link: "/map/:courseId",
  },
  {
    icon: (color: string) => <ShopIcon color={color} size={30} />,
    text: "SHOP",
    link: "/shop",
  },
  {
    icon: (color: string) => <HomeIcon color={color} size={30} />,
    text: "HOME",
    link: "/",
  },
  {
    icon: (color: string) => <TasksIcon color={color} size={30} />,
    text: "TASKS",
    link: "/tasks",
  },
  {
    icon: (color: string) => <VersusIcon color={color} size={30} />,
    text: "1 vs 1",
    link: "/versus",
  },
];
