import Flex from "@components/Flex";
import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { backgrounds } from "./constants";
import { useSelector } from "react-redux";
import { levelGameSelectors } from "@store/levelGame";
import { Backdrop } from "@components/Modal/ModalStyles";

const Wrapper = styled(Flex)<{ $activeGameType: number }>`
  background: ${(props) => backgrounds[props.$activeGameType]};
  background-position: center;
  background-size: calc(100% + 10px);
  height: 100vh;
  padding: 20px 11px;
  align-items: center;
  overflow: auto;
`;

const Content = styled(Flex)`
  max-width: 490px;
  width: 100%;
  flex-direction: column;
`;

const Spinner = styled.div<{ $isVisible: boolean }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  position: fixed;
  top: calc(50% - 24px);
  left: calc(50% - 24px);
  border-top: 4px solid #fff;
  border-right: 4px solid transparent;
  box-sizing: border-box;
  transition: opacity 0.3s ease, z-index 0.3s ease;
  animation: spin 0.8s linear infinite;
  -webkit-animation: spin 0.8s linear infinite;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  z-index: ${(props) => (props.$isVisible ? 1000 : -1)};
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border-left: 4px solid #3492e9;
    border-bottom: 4px solid transparent;
    animation: spin 0.4s linear infinite reverse;
    -webkit-animation: spin 0.4s linear infinite reverse;
  }
`;

export const GameLayout: FC<PropsWithChildren> = ({ children }) => {
  const seasonId = useSelector(levelGameSelectors.getSeasonId);
  const isLoadingGame = useSelector(levelGameSelectors.getIsLoading);
  return (
    <Wrapper direction="column" $activeGameType={seasonId || 0}>
      {isLoadingGame && (
        <>
          <Backdrop $visible={isLoadingGame} />
          <Spinner $isVisible={isLoadingGame} />
        </>
      )}

      <Content>{children || <Outlet />}</Content>
    </Wrapper>
  );
};
