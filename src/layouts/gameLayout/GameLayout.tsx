import Flex from "@components/Flex";
import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { backgrounds } from "./constants";
import { uiSelectors } from "@store/ui";
import { useSelector } from "react-redux";
import { ThemeType } from "@store/ui/types";

const Wrapper = styled(Flex)<{ $activeGameType: ThemeType }>`
  background: ${(props) => backgrounds[props.$activeGameType]};
  height: 100vh;
  padding: 20px 11px;
`;
export const GameLayout: FC<PropsWithChildren> = ({ children }) => {
  const theme = useSelector(uiSelectors.getTheme);
  return (
    <Wrapper direction="column" $activeGameType={theme}>
      {children || <Outlet />}
    </Wrapper>
  );
};
