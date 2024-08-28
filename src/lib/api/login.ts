import { ENV } from "@lib/configs/enviorements";
import { request } from ".";
const fakeLoginData = {
  user: '{"id":983609214,"first_name":"Pavel","last_name":"Кulаkоv","username":"k_pave1","language_code":"en","is_premium":true}',
  chat_instance: "4036553996013744381",
  chat_type: "sender",
  auth_date: "1723805795",
  hash: "6d5a396f960a160bdd755d922bb67744717a4c7389f4429a6c3808716c3871dd",
};

export const requestLogin$ = async (): Promise<string> => {
  const initData = !ENV.isDev ? window.Telegram.WebApp.initData : fakeLoginData;
  return await request.post(
    "/login",
    {},
    {
      params: initData,
    }
  );
};
