import Flex from "@components/Flex";
import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { backgrounds } from "./constants";
import { useSelector } from "react-redux";
import { levelGameSelectors } from "@store/levelGame";

const Wrapper = styled(Flex)<{ $activeGameType: number }>`
  background: ${(props) => backgrounds[props.$activeGameType]};
  background-position: center;
  background-size: calc(100% + 10px);
  height: 100vh;
  padding: 20px 11px;
  align-items: center;
`;

const Content = styled(Flex)`
  max-width: 490px;
  width: 100%;
  flex-direction: column;
`;

export const GameLayout: FC<PropsWithChildren> = ({ children }) => {
  const seasonId = useSelector(levelGameSelectors.getSeasonId);
  return (
    <Wrapper direction="column" $activeGameType={seasonId || 0}>
      <Content>{children || <Outlet />}</Content>
    </Wrapper>
  );
};
