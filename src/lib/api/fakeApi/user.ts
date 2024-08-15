import { User } from "@type/user";

export const fakeRequestUser = (
  userId: string | number,
  isError?: boolean
): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(userId);
      if (isError)
        reject(new Error("Ошибка загрузки информации о пользователе"));
      resolve({
        coins: Math.floor(Math.random() * 1000000),
        diamods: Math.floor(Math.random() * 1000000),
        health: Math.floor(Math.random() * 7),
        health_time: Math.floor(Math.random() * 1200),
        username: "username",
        id: Math.floor(Math.random() * 1000000),
      });
    }, 600);
  });
};
