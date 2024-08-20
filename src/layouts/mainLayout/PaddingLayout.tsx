import Flex from "@components/Flex";
import ActiveHeartIcon from "@components/icons/ActiveHeartIcon";
import CoinIcon from "@components/icons/CoinIcon";
import DiamondIcon from "@components/icons/DiamondIcon";
import NotActiveHeartIcon from "@components/icons/NotActiveHeartIcon";
import PlusIcon from "@components/icons/PlusIcon";
import { IndicatorItem } from "@components/IndicatorItem";
import { Text } from "@components/Typography";
import { formatNumber } from "@lib/utils/formatNumber";
import { HealthWrapper, ActionButton } from "@modules/rootPage/rootStyles";
import { uiSelectors } from "@store/ui";
import { FC, PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Wrapper = styled(Flex)<{ $padding: string; $overflow?: boolean }>`
  padding: ${(props) => props.$padding};
  overflow-y: ${(props) => (props.$overflow ? "auto" : "hidden")};
`;

interface PaddingLayoutProps extends PropsWithChildren {
  showHealth?: boolean;
  padding?: string;
  overflow?: boolean;
}

export const PaddingLayout: FC<PaddingLayoutProps> = ({
  children,
  showHealth,
  overflow,
  padding = "0 24px",
}) => {
  const user = useSelector(uiSelectors.getUser);
  return (
    <Wrapper $overflow={overflow} $padding={padding} direction="column">
      {user && (
        <Flex basis="50%" $top="6px" gap="12px" wrap="wrap">
          <IndicatorItem
            action={() => console.log("click")}
            value={formatNumber(user.gold)}
            icon={<CoinIcon size={43} />}
          />
          <IndicatorItem
            action={() => console.log("click")}
            value={formatNumber(user.gem)}
            icon={<DiamondIcon size={43} />}
          />
        </Flex>
      )}
      {showHealth && (
        <HealthWrapper>
          <ActionButton
            icon={<PlusIcon size={20} color="#fff" />}
            onClick={() => console.log(123)}
          />
          <Flex gap="5px">
            <ActiveHeartIcon size={21} />
            <ActiveHeartIcon size={21} />
            <ActiveHeartIcon size={21} />
            <ActiveHeartIcon size={21} />
            <ActiveHeartIcon size={21} />
            <NotActiveHeartIcon size={21} />
            <NotActiveHeartIcon size={21} />
          </Flex>
          <Text $size="subtitle">11:11</Text>
        </HealthWrapper>
      )}
      {children}
    </Wrapper>
  );
};