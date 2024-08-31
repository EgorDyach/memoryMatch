import { Location, User } from "@type/user";
import {
  langType,
  RequestState,
  StoreWithUIState,
  ThemeType,
  UIState,
  uiStateName,
} from "./types";
import { ShortLevel } from "@type/map";
import { Task } from "@type/tasks";

const getState = (store: StoreWithUIState): UIState => store[uiStateName];

export const getRequests = (
  s: StoreWithUIState
): Record<string, RequestState> => getState(s).requests;

export const getUser = (s: StoreWithUIState): User | null => getState(s).user;

export const getIsLoaderOpen = (s: StoreWithUIState): boolean =>
  getState(s).isLoaderOpen;

export const getTheme = (s: StoreWithUIState): ThemeType => getState(s).theme;

export const getIsAudioPlaying = (s: StoreWithUIState): boolean =>
  getState(s).isAudioPlaying;

export const getIsSfxActive = (s: StoreWithUIState): boolean =>
  getState(s).isSfxActive;

export const getLocations = (s: StoreWithUIState): Location[] =>
  getState(s).locations;

export const getLevels = (s: StoreWithUIState): Record<number, ShortLevel[]> =>
  getState(s).levels;

export const getLanguage = (s: StoreWithUIState): langType =>
  getState(s).language;

export const getTasks = (s: StoreWithUIState): Task[] => getState(s).tasks;

export const getTasksCompleted = (s: StoreWithUIState): Task[] =>
  getState(s).tasksCompleted;
