import { langType, UIState } from "./types";

export const uiInitialState: UIState = {
  requests: {},
  user: null,
  isLoaderOpen: true,
  locations: [],
  levels: {},
  theme: "default",
  isAudioPlaying: Boolean(localStorage.getItem("isAudioPlaying")),
  isSfxActive: Boolean(localStorage.getItem("isSfxActive")),
  language: (localStorage.getItem("language") || "en") as langType,
};
