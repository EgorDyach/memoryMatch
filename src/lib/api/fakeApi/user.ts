import { User } from "@type/user";

export const fakeRequestUser = (isError?: boolean): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isError)
        reject(new Error("Ошибка загрузки информации о пользователе"));
      resolve({
        id: Math.floor(Math.random() * 1000000),
        gold: Math.floor(Math.random() * 1000000),
        gem: Math.floor(Math.random() * 1000000),
        hearts: Math.floor(Math.random() * 7),
        username: "username",
        firstName: "Egor",
        lastName: "Dyachenko",
        boosts: [
          {
            type: 0,
            count: 10,
          },
          {
            type: 1,
            count: 999,
          },
          {
            type: 2,
            count: 2,
          },
        ],
      });
    }, 600);
  });
};
