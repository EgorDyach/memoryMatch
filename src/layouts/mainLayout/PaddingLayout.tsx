import Flex from "@components/Flex";
import { Hearts } from "@components/Hearts";
import CoinIcon from "@components/icons/CoinIcon";
import DiamondIcon from "@components/icons/DiamondIcon";
import { IndicatorItem } from "@components/IndicatorItem";
import { formatNumber } from "@lib/utils/formatNumber";
import { uiSelectors } from "@store/ui";
import { FC, PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Wrapper = styled(Flex)<{ $padding: string; $overflow?: boolean }>`
  padding: ${(props) => props.$padding};
  overflow-y: ${(props) => (props.$overflow ? "auto" : "hidden")};
  max-width: 490px;
  margin: 0 auto;
  width: 100%;
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
      {showHealth && user && <Hearts action $top="22px" />}
      {children}
    </Wrapper>
  );
};
