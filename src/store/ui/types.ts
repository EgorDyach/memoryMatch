import { User } from "@type/user";

export const uiStateName = "ui";

export type RequestState = "idle" | "pending" | "fetched";

export type UIState = {
  requests: Record<string, RequestState>;
  user: User | null;
  isLoaderOpen: boolean;
};

export type StoreWithUIState = {
  [uiStateName]: UIState;
};
