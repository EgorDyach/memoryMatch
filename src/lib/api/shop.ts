import { AnyObject } from "@type/common";
import { fakeRequestShopData } from "./fakeApi/shop";

export const requestShopData$ = async (
  userId: string | number
): Promise<AnyObject> => {
  return await fakeRequestShopData(userId);
};
