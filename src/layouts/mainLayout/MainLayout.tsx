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
  height: 100vh;
  position: relative;
  min-height: 100vh;
  padding: 20px 0 120px;
  align-items: center;
`;

const Content = styled(Flex)`
  max-width: 490px;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Wrapper direction="column">
        <Content>{children || <Outlet />}</Content>
      </Wrapper>
      <NavBar />
    </>
  );
};
