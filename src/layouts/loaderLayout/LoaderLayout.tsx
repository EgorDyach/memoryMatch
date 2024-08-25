import { FC, PropsWithChildren, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "./Loader";
import { uiActions, uiSelectors } from "@store/ui";
import { usePlaySFx } from "@hooks/usePlaySFx";
import { requestLogin$ } from "@lib/api/login";
import { requestLocations$ } from "@lib/api/map";
import { requestShopData$ } from "@lib/api/shop";
import { requestUser$ } from "@lib/api/user";
import { enqueueSnackbar } from "notistack";

export const LoaderLayout: FC<PropsWithChildren> = ({ children }) => {
  const soundSfx = usePlaySFx();
  const dispatch = useDispatch();
  const isLoaderOpen = useSelector(uiSelectors.getIsLoaderOpen);
  const isAudioPlaying = useSelector(uiSelectors.getIsAudioPlaying);
  const audio = useMemo(() => new Audio(), []);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      document.body.style.overflow = "hidden";
    });
    if (isLoaderOpen)
      (async () => {
        dispatch(uiActions.setRequestStarted("login"));
        dispatch(uiActions.setRequestStarted("locations"));
        dispatch(uiActions.setRequestStarted("shop"));
        dispatch(uiActions.setRequestStarted("user"));
        await requestLogin$()
          .then(() => {
            dispatch(uiActions.setRequestFinished("login"));
          })
          .catch((e) => {
            setError(e);
          });
        await requestUser$()
          .then((res) => {
            dispatch(uiActions.setUser(res));
            dispatch(uiActions.setRequestFinished("user"));
          })
          .catch((e) => {
            setError(e);
          });
        await requestShopData$(123)
          .then(() => {
            dispatch(uiActions.setRequestFinished("shop"));
          })
          .catch((e) => {
            setError(e);
          });
        await requestLocations$()
          .then((res) => {
            dispatch(uiActions.setLocations(res));
            dispatch(uiActions.setRequestFinished("locations"));
          })
          .catch((e) => {
            setError(e);
          });
      })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (error)
      enqueueSnackbar(error, {
        variant: "error",
      });
  }, [error]);

  useEffect(() => {
    audio.volume = 0.05;
    audio.src = "/music.mp3";
  }, [audio]);
  const handleClick = () => {
    audio.play();
    soundSfx();
    dispatch(uiActions.setLoader(false));
    if (!isAudioPlaying) {
      audio.pause();
      return;
    }
    dispatch(uiActions.setIsAudioPlaying(true));
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
