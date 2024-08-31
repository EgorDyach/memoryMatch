import { FC, PropsWithChildren, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Loader } from "./Loader";
import { uiActions, uiSelectors } from "@store/ui";
import { usePlaySFx } from "@hooks/usePlaySFx";
import { requestLogin$ } from "@lib/api/login";
import { requestLocationLevels$, requestLocations$ } from "@lib/api/map";
import { requestShopData$ } from "@lib/api/shop";
import { requestUser$ } from "@lib/api/user";
import { enqueueSnackbar } from "notistack";
import { Location } from "@type/user";
import { levelGameSelectors } from "@store/levelGame";
import { fetchHeartRecoveryTimeSeconds } from "@store/ui/thunks";
import { useAppDispatch } from "@hooks/useAppDispatch";

export const LoaderLayout: FC<PropsWithChildren> = ({ children }) => {
  const soundSfx = usePlaySFx();
  const dispatch = useAppDispatch();
  const isLoaderOpen = useSelector(uiSelectors.getIsLoaderOpen);
  const isAudioPlaying = useSelector(uiSelectors.getIsAudioPlaying);
  const seasonId = useSelector(levelGameSelectors.getSeasonId);
  const audio = useMemo(() => new Audio("/music.mp3"), []);
  const audio1 = useMemo(() => new Audio(`/music/cave.mp3`), []);
  const audio2 = useMemo(() => new Audio(`/music/aztec.mp3`), []);
  const audio3 = useMemo(() => new Audio(`/music/knight.mp3`), []);
  const audio4 = useMemo(() => new Audio(`/music/steam.mp3`), []);
  const audio5 = useMemo(() => new Audio(`/music/today.mp3`), []);
  const audio6 = useMemo(() => new Audio(`/music/cyber.mp3`), []);
  const audio7 = useMemo(() => new Audio(`/music/end.mp3`), []);
  const [error, setError] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      document.body.style.overflow = "hidden";
    });
    if (isLoaderOpen)
      (async () => {
        dispatch(uiActions.setRequestStarted("login"));
        dispatch(uiActions.setRequestStarted("shop"));
        dispatch(uiActions.setRequestStarted("locations"));
        dispatch(uiActions.setRequestStarted("locationLevels"));
        dispatch(uiActions.setRequestStarted("user"));
        await requestLogin$()
          .then(() => {
            dispatch(uiActions.setRequestFinished("login"));
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
        await requestUser$()
          .then((res) => {
            dispatch(fetchHeartRecoveryTimeSeconds(res));
            dispatch(uiActions.setUser(res));
            dispatch(uiActions.setRequestFinished("user"));
          })
          .catch((e) => {
            setError(e);
          });
        const locations = await requestLocations$()
          .then((res) => {
            dispatch(uiActions.setLocations(res));
            dispatch(uiActions.setRequestFinished("locations"));
            return res;
          })
          .catch((e): Location[] => {
            setError(e);
            return [];
          });
        for (const location of locations) {
          await requestLocationLevels$(location.id)
            .then((res) => {
              dispatch(
                uiActions.setLevels({ locationId: location.id, levels: res })
              );
            })
            .catch((e) => {
              setError(e);
            });
        }
        dispatch(uiActions.setRequestFinished("locationLevels"));
      })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (error)
      enqueueSnackbar(error, {
        variant: "error",
      });
  }, [error]);
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
    audio.volume = 0.05;
    audio1.volume = 0.05;
    audio2.volume = 0.05;
    audio3.volume = 0.05;
    audio4.volume = 0.05;
    audio5.volume = 0.05;
    audio6.volume = 0.05;
    audio7.volume = 0.05;

    // Добавляем обработчики события ended
    const handleEnded = () => {
      if (seasonId) {
        audio.pause();
        audio1.pause();
        audio2.pause();
        audio3.pause();
        audio4.pause();
        audio5.pause();
        audio6.pause();
        audio7.pause();
        switch (seasonId) {
          case 1:
            audio1.currentTime = 0; // Сбрасываем время
            audio1.play();
            break;
          case 2:
            audio2.currentTime = 0; // Сбрасываем время
            audio2.play();
            break;
          case 3:
            audio3.currentTime = 0; // Сбрасываем время
            audio3.play();
            break;
          case 4:
            audio4.currentTime = 0; // Сбрасываем время
            audio4.play();
            break;
          case 5:
            audio5.currentTime = 0; // Сбрасываем время
            audio5.play();
            break;
          case 6:
            audio6.currentTime = 0; // Сбрасываем время
            audio6.play();
            break;
          case 7:
            audio7.currentTime = 0; // Сбрасываем время
            audio7.play();
            break;
          default:
            audio.currentTime = 0; // Сбрасываем время
            audio.play();
            break;
        }
      } else {
        audio.play();
      }
    };

    audio.addEventListener("ended", () => handleEnded());
    audio1.addEventListener("ended", () => handleEnded());
    audio2.addEventListener("ended", () => handleEnded());
    audio3.addEventListener("ended", () => handleEnded());
    audio4.addEventListener("ended", () => handleEnded());
    audio5.addEventListener("ended", () => handleEnded());
    audio6.addEventListener("ended", () => handleEnded());
    audio7.addEventListener("ended", () => handleEnded());

    // Удаляем обработчики при размонтировании компонента
    return () => {
      audio.removeEventListener("ended", () => handleEnded());
      audio1.removeEventListener("ended", () => handleEnded());
      audio2.removeEventListener("ended", () => handleEnded());
      audio3.removeEventListener("ended", () => handleEnded());
      audio4.removeEventListener("ended", () => handleEnded());
      audio5.removeEventListener("ended", () => handleEnded());
      audio6.removeEventListener("ended", () => handleEnded());
      audio7.removeEventListener("ended", () => handleEnded());
    };
  }, [audio, audio1, audio2, audio3, audio4, audio5, audio6, audio7, seasonId]);
  return (
    <>
      <Loader handleClick={handleClick} isOpen={isLoaderOpen} />
      {children}
    </>
  );
};
