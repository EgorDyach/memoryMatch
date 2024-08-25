import { uiActions } from "@store/ui";
import { AppDispatch } from "..";
import { requestStartGame$ } from "@lib/api/game";
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
        startTimestamp,
        endTimestamp,
        movesUsed,
        maxMoves,
      } = await requestStartGame$(levelId, locationId);
      dispatch(levelGameActions.setBackpath(backpath));
      dispatch(levelGameActions.setSeasonId(Number(locationId)));
      dispatch(levelGameActions.setCards(cards));
      dispatch(levelGameActions.setId(id));
      dispatch(levelGameActions.setGameLevelId(gameLevelId));
      dispatch(levelGameActions.setPairs(cards.length ** 2 / 2));
      dispatch(
        levelGameActions.setInitialTimer(
          getTimeBetween(startTimestamp, endTimestamp, true)
        )
      );
      dispatch(levelGameActions.setMaxMoves(maxMoves));
      dispatch(levelGameActions.setMovesUsed(movesUsed));
    } catch {
      showErrorNotification("Ошибка при получении информации о пользователе");
    } finally {
      dispatch(uiActions.setRequestFinished("startGame"));
    }
  };
