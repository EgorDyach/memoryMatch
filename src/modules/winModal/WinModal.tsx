import Button from "@components/button/Button";
import Flex from "@components/Flex";
import CoinIcon from "@components/icons/CoinIcon";
import DiamondIcon from "@components/icons/DiamondIcon";
import LogoutIcon from "@components/icons/LogoutIcon";
import PlayIcon from "@components/icons/PlayIcon";
import WinStarIcon from "@components/icons/WinStarIcon";
import { Text } from "@components/Typography";
import { formatNumber } from "@lib/utils/formatNumber";
import { uiSelectors } from "@store/ui";
import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledFlex = styled(Flex)`
  width: 100%;
`;

const StyledButton = styled(Button)`
  position: relative;
  padding: 12px 12px;
`;

const StyledRestartIcon = styled(Flex)`
  position: absolute;
  left: 8px;
`;

const PrizeWrapper = styled(StyledFlex)`
  background-color: #00000078;
  padding: 7px 14px;
  border-radius: 5px;
  position: relative;
`;

const StyledIcon = styled(Flex)`
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(-35%, -10%);
`;

interface WinModalProps {
  onExit: VoidFunction;
  onNext: VoidFunction;
  gameLevelId: number;
}

export const WinModal: FC<WinModalProps> = ({ onExit, onNext }) => {
  const user = useSelector(uiSelectors.getUser);
  const locations = useSelector(uiSelectors.getLocations);
  const location = locations.filter((el) => el.isAvailable).at(-1);
  const levels = useSelector(uiSelectors.getLevels);
  const currentLevel =
    location && levels && levels[location.id]
      ? levels[location.id].filter((el) => !el.isCompleted)[0]
      : null;
  return (
    <StyledFlex direction="column">
      <Flex justify="center">
        <WinStarIcon size={77} />
      </Flex>
      <PrizeWrapper $top="large" justify="right">
        <StyledIcon>
          <DiamondIcon size={43} />
        </StyledIcon>
        {user && (
          <Text $color="#16EE2B">
            +{formatNumber(currentLevel?.prizes[0].count || 0)}
          </Text>
        )}
        <Text $left="small" $color="#fff">
          {formatNumber((user && user.gem) || 0)}
        </Text>
      </PrizeWrapper>
      <PrizeWrapper $top="large" justify="right">
        <StyledIcon>
          <CoinIcon size={43} />
        </StyledIcon>
        {user && (
          <Text $color="#16EE2B">
            +{formatNumber(currentLevel?.prizes[1].count || 0)}
          </Text>
        )}
        <Text $left="small" $color="#fff">
          {formatNumber((user && user.gold) || 0)}
        </Text>
      </PrizeWrapper>
      <Flex basis="50%" gap="20px" $top="large">
        <StyledButton onClick={onExit} type="danger" shadow="full">
          <StyledRestartIcon>
            <LogoutIcon size={35} />
          </StyledRestartIcon>
          <Text $size="subtitle">Exit</Text>
        </StyledButton>
        <StyledButton onClick={onNext} type="yellow" shadow="full">
          <StyledRestartIcon>
            <PlayIcon size={35} />
          </StyledRestartIcon>
          <Text $size="subtitle">Next</Text>
        </StyledButton>
      </Flex>
    </StyledFlex>
  );
};
