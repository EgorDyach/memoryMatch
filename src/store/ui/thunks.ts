import { User } from "@type/user";
import { AppDispatch } from "..";

import { requestUser$ } from "@lib/api/user";
import { uiActions } from ".";
import { showErrorNotification } from "@lib/utils/notification";
import { requestCompleteTask$, requestMyTasks$ } from "@lib/api/tasks";

export const fetchHeartRecoveryTimeSeconds =
  (user: User) => (dispatch: AppDispatch) => {
    if (user.hearts === 7) return;
    setTimeout(async () => {
      const user = await requestUser$().then((res) => {
        dispatch(fetchHeartRecoveryTimeSeconds(res));
        return res;
      });
      dispatch(uiActions.setUser(user));
    }, user.heartRecoveryTimeSeconds * 1000);
  };

export const fetchCompleteTask =
  (taskId: number) => async (dispatch: AppDispatch) => {
    try {
      await requestCompleteTask$(taskId);
      const tasks = await requestMyTasks$();
      dispatch(uiActions.setTasksCompleted(tasks));
    } catch {
      showErrorNotification("Не удалось выполнить задание!");
    }
  };
