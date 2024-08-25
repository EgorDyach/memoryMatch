import { ShortLevel } from "@type/map";
import { Location } from "@type/user";

const fakeLocations: Location[] = [
  {
    id: 1,
    number: 1,
    name: "Location 1",
    isAvailable: true,
  },
  {
    id: 2,
    number: 2,
    name: "Location 2",
    isAvailable: false,
  },
  {
    id: 3,
    number: 3,
    name: "Location 3",
    isAvailable: false,
  },
  {
    id: 4,
    number: 4,
    name: "Location 4",
    isAvailable: false,
  },
  {
    id: 5,
    number: 5,
    name: "Location 5",
    isAvailable: false,
  },
];

export const fakeLevels = [
  {
    id: 21,
    number: 1,
    isCompleted: false,
  },
  {
    id: 22,
    number: 2,
    isCompleted: false,
  },
  {
    id: 23,
    number: 3,
    isCompleted: false,
  },
  {
    id: 24,
    number: 4,
    isCompleted: false,
  },
  {
    id: 25,
    number: 5,
    isCompleted: false,
  },
];

export const fakeRequestLocationLevels = (
  _locationId: string | number,
  isError?: boolean
): Promise<ShortLevel[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isError) reject(new Error("Ошибка загрузки уровней"));
      resolve(fakeLevels);
    }, 600);
  });
};

export const fakeRequestLocations = (
  isError?: boolean
): Promise<Location[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isError) reject(new Error("Ошибка загрузки карты"));
      resolve(fakeLocations);
    }, 600);
  });
};
