import { uiSelectors } from "@store/ui";
import { Location } from "@type/user";
import { useSelector } from "react-redux";

export const useUserLocation = (): null | Location => {
  const user = useSelector(uiSelectors.getUser);
  if (!user) return null;
  const location = user.locations.filter((el) => el.isAvailable).at(-1);
  if (!location) return null;
  return location;
};
