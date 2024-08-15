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
import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

const Wrapper = styled(Flex)<{ $padding: string }>`
  padding: ${(props) => props.$padding};
`;

const FixedFlex = styled(Flex)`
  /* position: fixed; */
  /* top: 70px; */
`;

interface FixedLayoutProps extends PropsWithChildren {
  showHealth?: boolean;
  padding?: string;
}

export const FixedLayout: FC<FixedLayoutProps> = ({
  children,
  showHealth,
  padding = "0px 24px 0",
}) => {
  return (
    <Wrapper $padding={padding} direction="column">
      <FixedFlex basis="50%" gap="12px" wrap="wrap">
        <IndicatorItem
          action={() => console.log("click")}
          value={formatNumber(11111111)}
          icon={<CoinIcon size={43} />}
        />
        <IndicatorItem
          action={() => console.log("click")}
          value={formatNumber(11111111)}
          icon={<DiamondIcon size={43} />}
        />
      </FixedFlex>
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
