import { request } from ".";

export const requestLogin$ = async (): Promise<string> => {
  return await request.get("/login", {
    params: {
      initData: window.Telegram.WebApp.initData,
    },
  });
};
