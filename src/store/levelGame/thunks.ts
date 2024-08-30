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

export const fetchStartGame =
  (levelId: number | string, locationId: number | string, backpath: string) =>
  async (dispatch: AppDispatch) => {
    dispatch(uiActions.setRequestStarted("startGame"));
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
    } catch {
      showErrorNotification("Ошибка при попытке начать уровень!");
    } finally {
      dispatch(uiActions.setRequestFinished("startGame"));
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
    } catch {
      showErrorNotification("Ошибка при попытке переворота карточки!");
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
    } catch {
      showErrorNotification("Ошибка при попытке поставить игру на паузу!");
    } finally {
      dispatch(levelGameActions.setIsLoading(false));
    }
  };

export const fetchUnpauseGame =
  (gameId: number | string) => async (dispatch: AppDispatch) => {
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
    } catch {
      showErrorNotification("Ошибка при попытке снять игру с паузы!");
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
    } catch {
      showErrorNotification("Ошибка при попытке перезапуска игры!");
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
    } catch {
      showErrorNotification("Ошибка при попытке отмены игры!");
    } finally {
      dispatch(levelGameActions.setIsLoading(false));
    }
  };
export const fetchBoostViewCards =
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
      } = await requestBoostViewCards$(gameId);
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
    } catch {
      showErrorNotification("Ошибка при попытке использования бонуса!");
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
    } catch {
      showErrorNotification("Ошибка при попытке использования бонуса!");
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
    } catch {
      showErrorNotification("Ошибка при попытке использования бонуса!");
    } finally {
      dispatch(levelGameActions.setIsLoading(false));
    }
  };
