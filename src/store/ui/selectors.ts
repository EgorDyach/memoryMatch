import { User } from "@type/user";
import {
  RequestState,
  StoreWithUIState,
  ThemeType,
  UIState,
  uiStateName,
} from "./types";

const getState = (store: StoreWithUIState): UIState => store[uiStateName];

export const getRequests = (
  s: StoreWithUIState
): Record<string, RequestState> => getState(s).requests;

export const getUser = (s: StoreWithUIState): User | null => getState(s).user;

export const getIsLoaderOpen = (s: StoreWithUIState): boolean =>
  getState(s).isLoaderOpen;

export const getTheme = (s: StoreWithUIState): ThemeType => getState(s).theme;
