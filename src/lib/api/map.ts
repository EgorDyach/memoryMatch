import { AnyObject } from "@type/common";
import { fakeRequestMapData } from "./fakeApi/map";

export const requestMapData$ = async (
  userId: string | number
): Promise<AnyObject> => {
  return await fakeRequestMapData(userId);
};
