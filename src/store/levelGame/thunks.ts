import { uiActions } from "@store/ui";
import { AppDispatch } from "..";
import {
  requestAbortGame$,
  requestBoostExtraTime$,
  requestBoostOpenPair$,
  requestBoostViewCards$,
  requestFlipCard$,
  requestPauseGame$,
  requestRestartGame$,
  requestStartGame$,
  requestUnpauseGame$,
} from "@lib/api/game";
import { levelGameActions } from ".";
import { getTimeBetween } from "@lib/utils/getTimeBetween";
import { showErrorNotification } from "@lib/utils/notification";

import { Card } from "@type/game";
import { requestLocationLevels$, requestLocations$ } from "@lib/api/map";
import { requestUser$ } from "@lib/api/user";
import { fetchHeartRecoveryTimeSeconds } from "@store/ui/thunks";
import { Location } from "@type/user";
import { season } from "@modules/versusGamePage/constants";
import { language } from "@constants/language";

const loadImage = (src: string) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
};

export const reRequestData = async (dispatch: AppDispatch) => {
  dispatch(uiActions.setRequestStarted("locations"));
  dispatch(uiActions.setRequestStarted("locationLevels"));
  dispatch(uiActions.setRequestStarted("user"));
  await requestUser$()
    .then((res) => {
      dispatch(fetchHeartRecoveryTimeSeconds(res));
      dispatch(uiActions.setUser(res));
      dispatch(uiActions.setRequestFinished("user"));
    })
    .catch((e) => {
      showErrorNotification(e);
    });
  const locations = await requestLocations$()
    .then((res) => {
      dispatch(uiActions.setLocations(res));
      dispatch(uiActions.setRequestFinished("locations"));
      return res;
    })
    .catch((e): Location[] => {
      showErrorNotification(e);
      return [];
    });
  for (const location of locations) {
    await requestLocationLevels$(location.id)
      .then((res) => {
        dispatch(
          uiActions.setLevels({
            locationId: location.id,
            levels: res,
          })
        );
      })
      .catch((e) => {
        showErrorNotification(e);
      });
  }
  dispatch(uiActions.setRequestFinished("locationLevels"));
};

export const fetchStartGame =
  (levelId: number | string, locationId: number | string, backpath: string) =>
  async (dispatch: AppDispatch) => {
    dispatch(uiActions.setRequestStarted("startGame"));
    dispatch(uiActions.setRequestStarted("loadingImages"));
    try {
      const {
        cards,
        id,
        gameLevelId,
        endTimestamp,
        movesUsed,
        maxMoves,
        state,
      } = await requestStartGame$(levelId, locationId);
      await reRequestData(dispatch);
      const imageRequests = [
        loadImage(`/img/backgrounds/${season[Number(locationId) - 1]}.webp`),
      ];
      for (let i = 1; i <= 10; i++) {
        imageRequests.push(
          loadImage(
            `/img/cards/${season[Number(locationId) - 1]}/card${
              Number(locationId) * i
            }.webp`
          )
        );
      }

      await Promise.all(imageRequests);

      dispatch(levelGameActions.setBackpath(backpath));
      dispatch(levelGameActions.setStatus(state));
      dispatch(levelGameActions.setSeasonId(Number(locationId)));
      dispatch(levelGameActions.setCards(cards));
      dispatch(levelGameActions.setId(id));
      dispatch(levelGameActions.setGameLevelId(gameLevelId));
      dispatch(levelGameActions.setPairs(cards.length ** 2 / 2));
      dispatch(
        levelGameActions.setInitialTimer(
          Math.floor(getTimeBetween(new Date(), endTimestamp, true))
        )
      );
      dispatch(levelGameActions.setMaxMoves(maxMoves));
      dispatch(levelGameActions.setMovesUsed(movesUsed));
    } catch (e) {
      const lang = localStorage.getItem("language") || "en";
      showErrorNotification(`
        ${
          language[lang as "en" | "ru"]["notifications"]["errorOnStart"]
        }\n\n${e}`);
    } finally {
      dispatch(uiActions.setRequestFinished("startGame"));
      dispatch(uiActions.setRequestFinished("loadingImages"));
      dispatch(levelGameActions.setIsLoading(false));
    }
  };

export const fetchFlipCard =
  (gameId: number | string, cardId: number | string) =>
  async (dispatch: AppDispatch) => {
    const timeout = setTimeout(() => {
      dispatch(levelGameActions.setIsLoading(true));
    }, 700);
    try {
      const {
        cards,
        state,
        id,
        gameLevelId,
        endTimestamp,
        movesUsed,
        maxMoves,
      } = await requestFlipCard$(gameId, cardId);
      clearTimeout(timeout);
      dispatch(levelGameActions.setIsLoading(false));
      dispatch(levelGameActions.setCards(cards));
      dispatch(levelGameActions.setStatus(state));
      dispatch(levelGameActions.setId(id));
      dispatch(levelGameActions.setGameLevelId(gameLevelId));
      dispatch(levelGameActions.setPairs(cards.length ** 2 / 2));
      dispatch(
        levelGameActions.setInitialTimer(
          Math.floor(getTimeBetween(new Date(), endTimestamp, true))
        )
      );
      dispatch(levelGameActions.setMaxMoves(maxMoves));
      dispatch(levelGameActions.setMovesUsed(movesUsed));
    } catch (e) {
      const lang = localStorage.getItem("language") || "en";
      showErrorNotification(`
        ${
          language[lang as "en" | "ru"]["notifications"]["errorOnFlip"]
        }\n\n${e}`);
    } finally {
      dispatch(levelGameActions.setIsLoading(false));
    }
  };

export const fetchPauseGame =
  (gameId: number | string) => async (dispatch: AppDispatch) => {
    const timeout = setTimeout(() => {
      dispatch(levelGameActions.setIsLoading(true));
    }, 700);
    try {
      const { cards, state, id, gameLevelId, movesUsed, maxMoves } =
        await requestPauseGame$(gameId);
      clearTimeout(timeout);
      dispatch(levelGameActions.setIsLoading(false));
      dispatch(levelGameActions.setCards(cards));
      dispatch(levelGameActions.setStatus(state));
      dispatch(levelGameActions.setId(id));
      dispatch(levelGameActions.setGameLevelId(gameLevelId));
      dispatch(levelGameActions.setPairs(cards.length ** 2 / 2));
      dispatch(levelGameActions.setMaxMoves(maxMoves));
      dispatch(levelGameActions.setMovesUsed(movesUsed));
    } catch (e) {
      const lang = localStorage.getItem("language") || "en";
      showErrorNotification(`
        ${
          language[lang as "en" | "ru"]["notifications"]["errorOnPause"]
        }\n\n${e}`);
    } finally {
      dispatch(levelGameActions.setIsLoading(false));
    }
  };

export const fetchUnpauseGame =
  (gameId: number | string) => async (dispatch: AppDispatch) => {
    const timeout = setTimeout(() => {
      dispatch(levelGameActions.setIsLoading(false));
    }, 700);
    try {
      const {
        cards,
        state,
        id,
        gameLevelId,
        endTimestamp,
        movesUsed,
        maxMoves,
      } = await requestUnpauseGame$(gameId);
      clearTimeout(timeout);
      dispatch(levelGameActions.setIsLoading(false));
      dispatch(levelGameActions.setCards(cards));
      dispatch(levelGameActions.setId(id));
      dispatch(levelGameActions.setStatus(state));
      dispatch(levelGameActions.setGameLevelId(gameLevelId));
      dispatch(levelGameActions.setPairs(cards.length ** 2 / 2));
      dispatch(
        levelGameActions.setInitialTimer(
          Math.floor(getTimeBetween(new Date(), endTimestamp, true))
        )
      );
      dispatch(levelGameActions.setMaxMoves(maxMoves));
      dispatch(levelGameActions.setMovesUsed(movesUsed));
    } catch (e) {
      const lang = localStorage.getItem("language") || "en";
      showErrorNotification(`
        ${
          language[lang as "en" | "ru"]["notifications"]["errorOnUnpause"]
        }\n\n${e}`);
    } finally {
      dispatch(levelGameActions.setIsLoading(false));
    }
  };

export const fetchRestartGame =
  (gameId: number | string) => async (dispatch: AppDispatch) => {
    const timeout = setTimeout(() => {
      dispatch(levelGameActions.setIsLoading(true));
    }, 700);
    try {
      const {
        state,
        cards,
        id,
        gameLevelId,
        endTimestamp,
        movesUsed,
        maxMoves,
      } = await requestRestartGame$(gameId);
      await reRequestData(dispatch);
      clearTimeout(timeout);
      dispatch(levelGameActions.setIsLoading(false));
      dispatch(levelGameActions.setCards(cards));
      dispatch(levelGameActions.setId(id));
      dispatch(levelGameActions.setStatus(state));
      dispatch(levelGameActions.setGameLevelId(gameLevelId));
      dispatch(levelGameActions.setPairs(cards.length ** 2 / 2));
      dispatch(
        levelGameActions.setInitialTimer(
          Math.floor(getTimeBetween(new Date(), endTimestamp, true))
        )
      );
      dispatch(levelGameActions.setMaxMoves(maxMoves));
      dispatch(levelGameActions.setMovesUsed(movesUsed));
    } catch (e) {
      const lang = localStorage.getItem("language") || "en";
      showErrorNotification(`
        ${
          language[lang as "en" | "ru"]["notifications"]["errorOnRestart"]
        }\n\n${e}`);
    } finally {
      dispatch(levelGameActions.setIsLoading(false));
    }
  };
export const fetchAbortGame =
  (gameId: number | string) => async (dispatch: AppDispatch) => {
    const timeout = setTimeout(() => {
      dispatch(levelGameActions.setIsLoading(true));
    }, 700);
    try {
      await requestAbortGame$(gameId);
      await reRequestData(dispatch);
      clearTimeout(timeout);
      dispatch(levelGameActions.setIsLoading(false));
      dispatch(levelGameActions.setSeasonId(null));
      dispatch(levelGameActions.setCards([]));
      dispatch(levelGameActions.setId(null));
      dispatch(levelGameActions.setGameLevelId(null));
      dispatch(levelGameActions.setStatus(null));
      dispatch(levelGameActions.setPairs(null));
      dispatch(levelGameActions.setInitialTimer(null));
      dispatch(levelGameActions.setMaxMoves(null));
      dispatch(levelGameActions.setMovesUsed(null));
    } catch (e) {
      const lang = localStorage.getItem("language") || "en";
      showErrorNotification(`
        ${
          language[lang as "en" | "ru"]["notifications"]["errorOnAbort"]
        }\n\n${e}`);
    } finally {
      dispatch(levelGameActions.setIsLoading(false));
    }
  };
export const fetchBoostViewCards =
  (gameId: number | string, cardsWas: Card[][]) =>
  async (dispatch: AppDispatch) => {
    const timeout = setTimeout(() => {
      dispatch(levelGameActions.setIsLoading(true));
    }, 700);
    try {
      const {
        state,
        cards,
        id,
        gameLevelId,
        endTimestamp,
        movesUsed,
        maxMoves,
      } = await requestBoostViewCards$(gameId);
      await reRequestData(dispatch);
      clearTimeout(timeout);
      dispatch(levelGameActions.setIsLoading(false));
      dispatch(levelGameActions.setCards(cards));
      dispatch(levelGameActions.setId(id));
      dispatch(levelGameActions.setStatus(state));
      dispatch(levelGameActions.setGameLevelId(gameLevelId));
      dispatch(levelGameActions.setPairs(cards.length ** 2 / 2));
      dispatch(
        levelGameActions.setInitialTimer(
          Math.floor(getTimeBetween(new Date(), endTimestamp, true))
        )
      );
      dispatch(levelGameActions.setMaxMoves(maxMoves));
      dispatch(levelGameActions.setMovesUsed(movesUsed));
      dispatch(levelGameActions.setAreCardsShown(true));
      setTimeout(() => {
        dispatch(levelGameActions.setAreCardsShown(false));
        dispatch(levelGameActions.setCards(cardsWas));
      }, 5000);
    } catch (e) {
      const lang = localStorage.getItem("language") || "en";
      showErrorNotification(`
        ${
          language[lang as "en" | "ru"]["notifications"]["errorOnUseBonus"]
        }\n\n${e}`);
    } finally {
      dispatch(levelGameActions.setIsLoading(false));
    }
  };
export const fetchBoostOpenPair =
  (gameId: number | string) => async (dispatch: AppDispatch) => {
    const timeout = setTimeout(() => {
      dispatch(levelGameActions.setIsLoading(true));
    }, 700);
    try {
      const {
        state,
        cards,
        id,
        gameLevelId,
        endTimestamp,
        movesUsed,
        maxMoves,
      } = await requestBoostOpenPair$(gameId);
      await reRequestData(dispatch);

      clearTimeout(timeout);
      dispatch(levelGameActions.setIsLoading(false));
      dispatch(levelGameActions.setCards(cards));
      dispatch(levelGameActions.setId(id));
      dispatch(levelGameActions.setStatus(state));
      dispatch(levelGameActions.setGameLevelId(gameLevelId));
      dispatch(levelGameActions.setPairs(cards.length ** 2 / 2));
      dispatch(
        levelGameActions.setInitialTimer(
          Math.floor(getTimeBetween(new Date(), endTimestamp, true))
        )
      );
      dispatch(levelGameActions.setMaxMoves(maxMoves));
      dispatch(levelGameActions.setMovesUsed(movesUsed));
    } catch (e) {
      const lang = localStorage.getItem("language") || "en";
      showErrorNotification(`
        ${
          language[lang as "en" | "ru"]["notifications"]["errorOnUseBonus"]
        }\n\n${e}`);
    } finally {
      dispatch(levelGameActions.setIsLoading(false));
    }
  };
export const fetchBoostExtraTime =
  (gameId: number | string) => async (dispatch: AppDispatch) => {
    const timeout = setTimeout(() => {
      dispatch(levelGameActions.setIsLoading(true));
    }, 700);
    try {
      const {
        state,
        cards,
        id,
        gameLevelId,
        endTimestamp,
        movesUsed,
        maxMoves,
      } = await requestBoostExtraTime$(gameId);
      await reRequestData(dispatch);
      clearTimeout(timeout);
      dispatch(levelGameActions.setIsLoading(false));
      dispatch(levelGameActions.setCards(cards));
      dispatch(levelGameActions.setId(id));
      dispatch(levelGameActions.setStatus(state));
      dispatch(levelGameActions.setGameLevelId(gameLevelId));
      dispatch(levelGameActions.setPairs(cards.length ** 2 / 2));
      dispatch(
        levelGameActions.setInitialTimer(
          Math.floor(getTimeBetween(new Date(), endTimestamp, true))
        )
      );
      dispatch(levelGameActions.setMaxMoves(maxMoves));
      dispatch(levelGameActions.setMovesUsed(movesUsed));
    } catch (e) {
      const lang = localStorage.getItem("language") || "en";
      showErrorNotification(`
        ${
          language[lang as "en" | "ru"]["notifications"]["errorOnUseBonus"]
        }\n\n${e}`);
    } finally {
      dispatch(levelGameActions.setIsLoading(false));
    }
  };

export const fetchStartNextLevel = () => async (dispatch: AppDispatch) => {
  const timeout = setTimeout(() => {
    dispatch(levelGameActions.setIsLoading(true));
  }, 700);
  try {
    const locations = await requestLocations$();
    dispatch(uiActions.setLocations(locations));
    const currentLocation = locations.filter((el) => el.isAvailable).at(-1);
    if (!currentLocation) throw new Error("Не удалось найти локацию!");
    const levels = await requestLocationLevels$(currentLocation.id);
    dispatch(uiActions.setLevels({ levels, locationId: currentLocation.id }));
    const currentLevel = levels.filter((el) => !el.isCompleted)[0];
    if (!currentLevel) throw new Error("Не удалось найти уровень!");
    dispatch(fetchStartGame(currentLevel.number, currentLocation.number, "/"));
    clearTimeout(timeout);
  } catch (e) {
    const lang = localStorage.getItem("language") || "en";
    showErrorNotification(`
      ${
        language[lang as "en" | "ru"]["notifications"]["errorOnNext"]
      }\n\n${e}`);
  } finally {
    dispatch(levelGameActions.setIsLoading(false));
  }
};
