import { configureStore } from "@reduxjs/toolkit";
import { uiReducer, uiStoreName } from "./ui";
import { levelGameReducer, levelGameStoreName } from "./levelGame";
import { localGameReducer, localGameStoreName } from "./localGame";

export const store = configureStore({
  reducer: {
    [uiStoreName]: uiReducer,
    [levelGameStoreName]: levelGameReducer,
    [localGameStoreName]: localGameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
