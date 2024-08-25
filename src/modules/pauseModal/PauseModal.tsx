import Button from "@components/button/Button";
import Flex from "@components/Flex";
import LogoutIcon from "@components/icons/LogoutIcon";
import PlayIcon from "@components/icons/PlayIcon";
import RestartIcon from "@components/icons/RestartIcon";
import { Toggle } from "@components/Toggle";
import { Text } from "@components/Typography";
import { uiActions, uiSelectors } from "@store/ui";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

interface PauseModalProps {
  onExit: VoidFunction;
  onCancel: VoidFunction;
  onRestart: VoidFunction;
}

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

export const PauseModal: FC<PauseModalProps> = ({
  onExit,
  onCancel,
  onRestart,
}) => {
  const isMusicPlaying = useSelector(uiSelectors.getIsAudioPlaying);
  const isSfxActive = useSelector(uiSelectors.getIsSfxActive);

  const dispatch = useDispatch();
  return (
    <StyledFlex direction="column">
      <StyledButton type="yellow" onClick={onCancel} shadow="full">
        <StyledRestartIcon>
          <PlayIcon size={20} />
        </StyledRestartIcon>
        <Text $size="subtitle">Resume</Text>
      </StyledButton>
      <StyledButton onClick={onRestart} $top="large" type="blue" shadow="full">
        <StyledRestartIcon>
          <RestartIcon size={25} />
        </StyledRestartIcon>
        <Text $size="subtitle">Restart</Text>
      </StyledButton>
      <Flex align="center" $top="xlarge" justify="space-between">
        <Text $color="secondary">Music</Text>
        <Toggle
          values={["On", "Off"]}
          activeValue={isMusicPlaying ? "On" : "Off"}
          onChange={(v) => {
            if (v === "On") dispatch(uiActions.setIsAudioPlaying(true));
            if (v === "Off") dispatch(uiActions.setIsAudioPlaying(false));
          }}
        />
      </Flex>
      <Flex align="center" $top="small" justify="space-between">
        <Text $color="secondary">SFx</Text>
        <Toggle
          values={["On", "Off"]}
          activeValue={isSfxActive ? "On" : "Off"}
          onChange={(v) => {
            if (v === "On") dispatch(uiActions.setIsSfxActive(true));
            if (v === "Off") dispatch(uiActions.setIsSfxActive(false));
          }}
        />
      </Flex>
      <StyledButton onClick={onExit} $top="medium" type="danger" shadow="full">
        <StyledRestartIcon>
          <LogoutIcon size={35} />
        </StyledRestartIcon>
        <Text $size="subtitle">Exit</Text>
      </StyledButton>
    </StyledFlex>
  );
};
