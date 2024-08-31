import Button from "@components/button/Button";
import Flex from "@components/Flex";
import { Text } from "@components/Typography";
import { gradients } from "@lib/theme/colors";
import { shadow } from "@lib/theme/shadow";
import styled from "styled-components";

export const SocialIconWrapper = styled(Flex)`
  background: ${gradients.shopCard};
  ${shadow(
    "custom",
    "0px 1.33px 0px 0px #0000001A, 0px 0.67px 0px 0px #698CAD"
  )};
  border: 0.67px solid #698cad;
  border-radius: 6.67px;
  height: 75px;
  width: 100%;
`;

export const StyledButton = styled(Button)`
  padding: 10px 4px;
  width: 100%;

  font-size: 12px;
  @media (max-width: 385px) {
    font-size: 10px;
  }
  @media (max-width: 365px) {
    font-size: 9.5px;
  }
`;

export const StyledText = styled(Text)`
  font-size: 14.5px;
  @media (max-width: 410px) {
    font-size: 14px;
  }
  @media (max-width: 385px) {
    font-size: 11px;
  }
`;

export const StyledProgressValues = styled(Flex)`
  position: relative;
  justify-content: space-between;
`;

export const RewardsWrapper = styled(Flex)`
  position: relative;
  height: 15px;
`;

export const StyledCurrent = styled(Button)<{ $left: number }>`
  ${shadow("min")};
  position: absolute;
  top: 5px;
  transform: translate(-50%, -50%);
  transition: left 0.3s ease;
  left: ${(props) => props.$left}%;
`;

export const Reward = styled(Flex)<{ $leftPercent: number }>`
  position: absolute;
  left: ${(props) => props.$leftPercent}%;
  bottom: 0;
  transform: translate(-50%, 50%);
`;
