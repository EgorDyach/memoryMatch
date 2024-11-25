import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { langType, ThemeType, uiStateName } from "./types";
import { uiInitialState } from "./constants";
import { Location, User } from "@type/user";
import { ShortLevel } from "@type/map";
import { Task } from "@type/tasks";

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
    setLevels(
      state,
      { payload }: PayloadAction<{ locationId: number; levels: ShortLevel[] }>
    ) {
      state.levels[payload.locationId] = payload.levels;
    },
    setIsAudioPlaying(state, { payload }: PayloadAction<boolean>) {
      state.isAudioPlaying = payload;
      localStorage.setItem("isAudioPlaying", payload ? "true" : "");
    },
    setIsSfxActive(state, { payload }: PayloadAction<boolean>) {
      state.isSfxActive = payload;
      localStorage.setItem("isSfxActive", payload ? "true" : "");
    },
    setLanguage(state, { payload }: PayloadAction<langType>) {
      state.language = payload;
    },
    setTasks(state, { payload }: PayloadAction<Task[]>) {
      state.tasks = payload;
    },
    setTasksCompleted(state, { payload }: PayloadAction<Task[]>) {
      state.tasksCompleted = payload;
    },
  },
});

export const { name, reducer, actions } = uiSlice;
