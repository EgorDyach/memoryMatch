import { ShortLevel } from "@type/map";
import { Location, User } from "@type/user";

export const uiStateName = "ui";

export type RequestState = "idle" | "pending" | "fetched";
export type ThemeType =
  | "cave"
  | "default"
  | "aztec"
  | "knight"
  | "steam"
  | "today"
  | "cyber"
  | "end";

export type UIState = {
  requests: Record<string, RequestState>;
  user: User | null;
  isLoaderOpen: boolean;
  theme: ThemeType;
  isAudioPlaying: boolean;
  isSfxActive: boolean;
  locations: Location[];
  levels: Record<number, ShortLevel[]>;
};

export type StoreWithUIState = {
  [uiStateName]: UIState;
};
