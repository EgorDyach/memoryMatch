import { language } from "@constants/language";
import { ShortLevel } from "@type/map";
import { Task } from "@type/tasks";
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
  language: langType;
  requests: Record<string, RequestState>;
  user: User | null;
  isLoaderOpen: boolean;
  theme: ThemeType;
  tasks: Task[];
  tasksCompleted: Task[];
  isAudioPlaying: boolean;
  isSfxActive: boolean;
  locations: Location[];
  levels: Record<number, ShortLevel[]>;
};

export type StoreWithUIState = {
  [uiStateName]: UIState;
};

export type langType = keyof typeof language;
