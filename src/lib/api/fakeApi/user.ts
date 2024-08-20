import { User } from "@type/user";

export const fakeRequestUser = (isError?: boolean): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isError)
        reject(new Error("Ошибка загрузки информации о пользователе"));
      resolve({
        gold: Math.floor(Math.random() * 1000000),
        gem: Math.floor(Math.random() * 1000000),
        username: "username",
        id: Math.floor(Math.random() * 1000000),
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
        locations: [
          {
            id: 0,
            number: 5,
            name: "Cave world",
            isAvailable: true,
          },
          {
            id: 1,
            number: 40,
            name: "Aztec world",
            isAvailable: false,
          },
          {
            id: 2,
            number: 23,
            name: "Knight world",
            isAvailable: false,
          },
          {
            id: 3,
            number: 2,
            name: "Steam world",
            isAvailable: false,
          },
          {
            id: 4,
            number: 0,
            name: "Today world",
            isAvailable: false,
          },
          {
            id: 5,
            number: 0,
            name: "Cyber world",
            isAvailable: false,
          },
          {
            id: 6,
            number: 0,
            name: "End world",
            isAvailable: false,
          },
        ],
      });
    }, 600);
  });
};
