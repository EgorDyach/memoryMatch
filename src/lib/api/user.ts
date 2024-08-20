import { fakeRequestUser } from "./fakeApi/user";
import { User } from "@type/user";

export const requestUser$ = async (userId: string | number): Promise<User> => {
  return await fakeRequestUser(userId);
};
