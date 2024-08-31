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

const Wrapper = styled(Flex)<{ $padding: string }>`
  padding: ${(props) => props.$padding};
  position: relative;
  overflow: auto;
  max-width: 490px;
  width: 100%;
`;

const FixedFlex = styled(Flex)`
  position: fixed;
  width: calc(100% - 48px);
  top: 26px;
  z-index: 2;
  max-width: 440px;
`;

// const TopBlur = styled.div`
//   height: 160px;
//   z-index: 1;
//   background: linear-gradient(
//     180deg,
//     rgba(0, 0, 0, 0.9) 0%,
//     rgba(0, 0, 0, 0.9) 40%,
//     rgba(0, 0, 0, 0) 100%
//   );
//   position: absolute;
//   left: 0;
//   right: 0;
//   top: 0;
// `;

const Content = styled(Flex)`
  max-width: 490px;
  width: 100%;
  align-items: center;
  flex-direction: column;
  overflow: auto;
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
  const user = useSelector(uiSelectors.getUser);
  return (
    <Content>
      <Wrapper $padding={padding} direction="column">
        {user && (
          <FixedFlex basis="50%" gap="12px" wrap="wrap">
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
            {showHealth && <Hearts />}
          </FixedFlex>
        )}
        {children}
      </Wrapper>
    </Content>
  );
};
