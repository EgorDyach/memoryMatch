import { AnyObject } from "@type/common";

export const fakeRequestMapData = (
  userId: string | number,
  isError?: boolean
): Promise<AnyObject> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isError) reject(new Error("Ошибка загрузки карты"));
      resolve({
        key1: "value 1",
        key2: {
          id: 12312313,
          user: "@user_example",
        },
        level: 123,
        id: userId,
      });
    }, 600);
  });
};
