import Flex from "@components/Flex";
import CoinIcon from "@components/icons/CoinIcon";
import DiamondIcon from "@components/icons/DiamondIcon";
import FragmentIcon from "@components/icons/FragmentIcon";
import { Text } from "@components/Typography";
import { gradients } from "@lib/theme/colors";
import { textShadow } from "@lib/theme/shadow";
import { FC } from "react";
import styled, { keyframes } from "styled-components";

interface MapTooltipProps {
  placement?: "top" | "left" | "right" | "bottom";
  className?: string;
  icon: "diamond" | "coin" | "fragment";
  count: number;
}

const Slide = ($placement: "top" | "left" | "right" | "bottom") => keyframes`
   0% {
      ${
        $placement === "top" &&
        `
      transform: translate(0, 0);
      `
      }

      ${
        $placement === "bottom" &&
        `
      transform: translate(0, 0);
      `
      }

    ${
      $placement === "left" &&
      `
      transform: translate(0, -0%);
      `
    }
    ${
      $placement === "right" &&
      `
      transform: translate(0, -0%);
      `
    }
    }
    50% {
      ${
        $placement === "top" &&
        `
      transform: translate(0, -25%);
      `
      }

      ${
        $placement === "bottom" &&
        `
      transform: translate(-0%, 25%);
      `
      }

    ${
      $placement === "left" &&
      `
      transform: translate(-25%, -0%);
      `
    }
    ${
      $placement === "right" &&
      `
      transform: translate(20%, -0%);
      `
    }
    }
      100% {
      ${
        $placement === "top" &&
        `
      transform: translate(-0%, 0);
      `
      }

      ${
        $placement === "bottom" &&
        `
      transform: translate(-0%, 0);
      `
      }

    ${
      $placement === "left" &&
      `
      transform: translate(0, -0%);
      `
    }
    ${
      $placement === "right" &&
      `
      transform: translate(0, -0%);
      `
    }
    }
`;

const StyledMapTooltip = styled(Flex)<{
  $placement: "top" | "left" | "right" | "bottom";
}>`
  keyframes slide {
  }
  height: calc(100% - 25px);
  width: calc(100% - 15px);
  border-radius: 4.6px;
  border: 0.77px solid #698cad;
  box-shadow: 0px 1.02px 0px 0px #0000001a, 0px 0.51px 0px 0px #698cad;
  background: ${gradients.shopCard};
  animation: ${(props) => Slide(props.$placement)} ${Math.random() + 1}s ease
    infinite;
  ${(props) =>
    props.$placement === "top" &&
    `
      top: 20%; /* At the bottom of the tooltip */
      `}

  ${(props) =>
    props.$placement === "bottom" &&
    `
      bottom: 20%; /* At the bottom of the tooltip */
      `}

    ${(props) =>
    props.$placement === "left" &&
    `
      left: 20%;
      `}
    ${(props) =>
    props.$placement === "right" &&
    `
      right: -5px;
      `}
  position: relative;
  &::after {
    content: "";
    position: absolute;
    ${(props) =>
      props.$placement === "top" &&
      `
      top: 100%; /* At the bottom of the tooltip */
      left: 50%;
      transform: translateX(-50%);
      border-color: #d9d9d9 transparent transparent transparent;
      `}

    ${(props) =>
      props.$placement === "bottom" &&
      `
      bottom: 100%; /* At the bottom of the tooltip */
      left: 50%;
      transform: translateX(-50%);
      border-color: transparent #d9d9d9  transparent transparent;
      `}

    ${(props) =>
      props.$placement === "left" &&
      `
      bottom: 50%; /* At the bottom of the tooltip */
      left: 100%;
      border-color: transparent #d9d9d9 transparent  transparent;
      `}
    ${(props) =>
      props.$placement === "right" &&
      `
      bottom: 50%; /* At the bottom of the tooltip */
      right: 100%;;
      border-color: transparent #d9d9d9 transparent transparent;
      `}
    border-width: 5px;
    border-style: solid;
  }
`;

const StyledCount = styled(Text)`
  position: absolute;
  top: 2px;
  left: 0;
  right: 0;
  ${textShadow("#092E46", 0.87, 0.87)}/* transform: translateX(-50%); */
`;

export const MapTooltip: FC<MapTooltipProps> = ({
  placement = "top",
  icon,
  count,
  className,
}) => {
  return (
    <StyledMapTooltip
      justify="center"
      align="center"
      $placement={placement}
      className={className}
    >
      {icon === "coin" && <CoinIcon size={43} />}
      {icon === "diamond" && <DiamondIcon size={43} />}
      {icon === "fragment" && <FragmentIcon size={43} />}
      <StyledCount>{count}</StyledCount>
    </StyledMapTooltip>
  );
};
