import Flex from "@components/Flex";
import { NavBar } from "@layouts/shared/navBar/NavBar";
import { gradients } from "@lib/theme/colors";
import { FC, PropsWithChildren, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import bg from "@assets/bg.svg";

const Wrapper = styled(Flex)`
  background: url(${bg}), ${gradients.mainBg};
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  position: relative;
  min-height: 100vh;
  padding: 70px 0 125px;
`;

export const TopBlur = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 57px;
  z-index: 10000;
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 86.85%);
`;

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Wrapper direction="column">
        <TopBlur />
        {children || <Outlet />}
      </Wrapper>
      <NavBar />
    </>
  );
};
