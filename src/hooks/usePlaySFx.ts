import { uiSelectors } from "@store/ui";
import { useCallback } from "react";
import { useSelector } from "react-redux";

export const usePlaySFx = () => {
  const isSfxActive = useSelector(uiSelectors.getIsSfxActive);
  return useCallback(() => {
    if (isSfxActive) {
      const audio = new Audio();
      audio.src = "/sfx.mp3";
      audio.volume = 0.5;
      audio.play();
    }
  }, [isSfxActive]);
};
