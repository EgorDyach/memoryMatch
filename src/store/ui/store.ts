import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemeType, uiStateName } from "./types";
import { uiInitialState } from "./constants";
import { Location, User } from "@type/user";

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
    setLocations(state, { payload }: PayloadAction<Location[]>) {
      state.locations = payload;
    },
    setLoader(state, { payload }: PayloadAction<boolean>) {
      state.isLoaderOpen = payload;
    },
    setTheme(state, { payload }: PayloadAction<ThemeType>) {
      state.theme = payload;
    },
    setIsAudioPlaying(state, { payload }: PayloadAction<boolean>) {
      state.isAudioPlaying = payload;
      localStorage.setItem('isAudioPlaying', payload ? 'true' : '')
    },
    setIsSfxActive(state, { payload }: PayloadAction<boolean>) {
      state.isSfxActive = payload;
      localStorage.setItem('isSfxActive', payload ? 'true' : '')
    },
  },
});

export const { name, reducer, actions } = uiSlice;
