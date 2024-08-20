import { FC, PropsWithChildren, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "./Loader";
import { uiActions, uiSelectors } from "@store/ui";
import { usePlaySFx } from "@hooks/usePlaySFx";

export const LoaderLayout: FC<PropsWithChildren> = ({ children }) => {
  const isLoaderOpen = useSelector(uiSelectors.getIsLoaderOpen);
  const isAudioPlaying = useSelector(uiSelectors.getIsAudioPlaying);
  const soundSfx = usePlaySFx();
  const audio = useMemo(() => new Audio(), []);
  const dispatch = useDispatch();
  useEffect(() => {
    audio.volume = 0.05;
    audio.src = "/music.mp3";
  }, [audio]);
  const handleClick = () => {
    audio.play();
    soundSfx();
    dispatch(uiActions.setIsAudioPlaying(true));
    dispatch(uiActions.setLoader(false));
  };
  useEffect(() => {
    if (isAudioPlaying) audio.play();
    else audio.pause();
  }, [audio, isAudioPlaying]);
  return (
    <>
      <Loader handleClick={handleClick} isOpen={isLoaderOpen} />
      {children}
    </>
  );
};
