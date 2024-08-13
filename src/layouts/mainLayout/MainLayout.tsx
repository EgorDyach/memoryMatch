import { NavBar } from "@layouts/shared/navBar/NavBar";
import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children || <Outlet />}
      <NavBar />
    </>
  );
};
