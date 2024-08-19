import { configureStore } from "@reduxjs/toolkit";
import { uiReducer, uiStoreName } from "./ui";
import { gameReducer, gameStoreName } from "./game";

export const store = configureStore({
  reducer: {
    [uiStoreName]: uiReducer,
    [gameStoreName]: gameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
