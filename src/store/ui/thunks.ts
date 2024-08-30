import { User } from "@type/user";
import { AppDispatch } from "..";

import { requestUser$ } from "@lib/api/user";
import { uiActions } from ".";

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
