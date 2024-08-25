import { UIState } from "./types";

export const uiInitialState: UIState = {
  requests: {},
  user: null,
  isLoaderOpen: true,
  locations: [],
  theme: "default",
  isAudioPlaying: Boolean(localStorage.getItem("isAudioPlaying")),
  isSfxActive: Boolean(localStorage.getItem("isSfxActive")),
};
