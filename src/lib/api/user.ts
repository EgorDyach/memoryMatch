import { fakeRequestUser } from "./fakeApi/user";
import { User } from "@type/user";

export const requestUser$ = async (): Promise<User> => {
  return await fakeRequestUser();
};
