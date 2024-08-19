import { useLocation } from "react-router-dom";
import { useCallbackOnce } from "./useCallbackOnce";

export const usePathParam = () => {
  const params = useLocation().search.slice(1).split("&");
  return useCallbackOnce((param: string): string | undefined => {
    const finded = params
      .map((item) => item.split("="))
      .find((item) => item[0] === param);
    if (!finded) return;
    return finded[1];
  });
};
