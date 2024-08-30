import { request } from ".";
import { User } from "@type/user";

export const requestUser$ = async (): Promise<User> => {
  return await request.get("/profile");
};
