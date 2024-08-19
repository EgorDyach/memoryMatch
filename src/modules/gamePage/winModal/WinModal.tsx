import Button from "@components/button/Button";
import Flex from "@components/Flex";
import LogoutIcon from "@components/icons/LogoutIcon";
import RestartIcon from "@components/icons/RestartIcon";
import WinStarIcon from "@components/icons/WinStarIcon";
import { Text } from "@components/Typography";
import { FC } from "react";
import styled from "styled-components";

const StyledFlex = styled(Flex)`
  width: 100%;
`;

const StyledButton = styled(Button)`
  position: relative;
  padding: 8px 12px;
`;

const StyledRestartIcon = styled(Flex)`
  position: absolute;
  left: 8px;
`;

interface WinModalProps {
  onExit: VoidFunction;
  onRestart: VoidFunction;
}

export const WinModal: FC<WinModalProps> = ({ onExit, onRestart }) => {
  return (
    <StyledFlex direction="column">
      <Flex justify="center">
        <WinStarIcon size={77} />
      </Flex>
      <StyledButton onClick={onRestart} $top="large" type="blue" shadow="full">
        <StyledRestartIcon>
          <RestartIcon size={35} />
        </StyledRestartIcon>
        <Text $size="subtitle">Restart</Text>
      </StyledButton>
      <StyledButton onClick={onExit} $top="large" type="danger" shadow="full">
        <StyledRestartIcon>
          <LogoutIcon size={35} />
        </StyledRestartIcon>
        <Text $size="subtitle">Exit</Text>
      </StyledButton>
    </StyledFlex>
  );
};
