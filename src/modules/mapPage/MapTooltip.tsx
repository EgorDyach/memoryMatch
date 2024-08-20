import Flex from "@components/Flex";
import { Text } from "@components/Typography";
import { gradients } from "@lib/theme/colors";
import { textShadow } from "@lib/theme/shadow";
import { FC } from "react";
import styled, { keyframes } from "styled-components";
import coin from "/img/coin.svg";
import diamond from "/img/diamond.svg";
import fragment from "/img/fragment.svg";
interface MapTooltipProps {
  placement?: "top" | "left" | "right" | "bottom";
  className?: string;
  icon: "diamond" | "coin" | "fragment";
  count: number;
}

const Slide = ($placement: "top" | "left" | "right" | "bottom") => keyframes`
   0% {
      padding-top: 0;
    }
    
    50% {
      ${`padding-${$placement}: 25px;`}
    }

    100% {
      padding-top: 0;
    }
`;

const StyledMapTooltip = styled(Flex)<{
  $icon: "diamond" | "coin" | "fragment";
}>`
  height: calc(100% - 25px);
  width: calc(100% - 15px);
  border-radius: 4.6px;
  border: 0.77px solid #698cad;
  box-shadow: 0px 1.02px 0px 0px #0000001a, 0px 0.51px 0px 0px #698cad;
  background: ${(props) => props.$icon === "coin" && `url(${coin})`}
      ${(props) => props.$icon === "diamond" && `url(${diamond})`}
      ${(props) => props.$icon === "fragment" && `url(${fragment})`},
    ${gradients.shopCard};
  background-position: center;
  background-repeat: no-repeat;
`;

const StyledCount = styled(Text)`
  padding-bottom: 20px;
  ${textShadow("#092E46", 0.87, 0.87)}/* transform: translateX(-50%); */
`;

const StyledArrow = styled.span<{
  $placement: "top" | "left" | "right" | "bottom";
}>`
  ${(props) =>
    props.$placement === "top" &&
    `
      border-color: rgba(151, 190, 226, 1) transparent transparent transparent;
      `}

  ${(props) =>
    props.$placement === "right" &&
    `
  border-color: transparent rgba(151, 190, 226, 1) transparent transparent;
  `}
  ${(props) =>
    props.$placement === "bottom" &&
    `
      border-color: transparent rgba(151, 190, 226, 1)  transparent transparent;
      `}

    ${(props) =>
    props.$placement === "left" &&
    `
      border-color: transparent transparent  rgba(151, 190, 226, 1);
      `}
      margin: 0 auto;
  margin-top: -2px;
  border-width: 10px;
  border-style: solid;
`;

const StyledWrapper = styled(Flex)<{
  $placement: "top" | "left" | "right" | "bottom";
}>`
  animation: ${(props) => Slide(props.$placement)} 1.2s ease infinite;
`;
const StyledFlex = styled(Flex)<{
  $placement: "top" | "left" | "right" | "bottom";
}>`
  width: ${(props) =>
    props.$placement === "right" || props.$placement === "left"
      ? "70px"
      : "100%"};
  height: 75px;
`;

export const MapTooltip: FC<MapTooltipProps> = ({
  placement = "top",
  icon,
  count,
  className,
}) => {
  return (
    <StyledWrapper
      justify={
        placement === "left"
          ? "start"
          : placement === "right"
          ? "end"
          : "center"
      }
      align={"stretch"}
      $placement={placement}
    >
      <StyledFlex
        $placement={placement}
        align="center"
        direction={
          placement === "left"
            ? "row"
            : placement === "right"
            ? "row-reverse"
            : placement === "top"
            ? "column"
            : "column-reverse"
        }
      >
        <StyledMapTooltip
          justify="center"
          align="center"
          className={className}
          $icon={icon}
        >
          <StyledCount>{count}</StyledCount>
        </StyledMapTooltip>
        <StyledArrow $placement={placement} />
      </StyledFlex>
    </StyledWrapper>
  );
};
