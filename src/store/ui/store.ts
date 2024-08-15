import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { uiStateName } from "./types";
import { uiInitialState } from "./constants";
import { User } from "@type/user";

const uiSlice = createSlice({
  name: uiStateName,
  initialState: uiInitialState,
  reducers: {
    setRequestStarted(state, { payload }: PayloadAction<string>) {
      state.requests[payload] = "pending";
    },
    setRequestFinished(state, { payload }: PayloadAction<string>) {
      state.requests[payload] = "fetched";
    },
    resetRequest(state, { payload }: PayloadAction<string>) {
      state.requests[payload] = "idle";
    },
    setUser(state, { payload }: PayloadAction<User | null>) {
      state.user = payload;
    },
    setLoader(state, { payload }: PayloadAction<boolean>) {
      state.isLoaderOpen = payload;
    },
  },
});

export const { name, reducer, actions } = uiSlice;
