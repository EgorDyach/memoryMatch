import { withIndentStyles } from "@hocs/withIndentStyles";
import { FC } from "react";
import { styled } from "styled-components";

interface RawProgressBarProps {
  active: number;
  total: number;
  color1: string;
  color2: string;
  bgColor: string;
  className?: string;
}
import { keyframes, css } from "styled-components";

const transition = (transitionValue: string) => css`
  -webkit-transition: ${transitionValue};
  -moz-transition: ${transitionValue};
  -o-transition: ${transitionValue};
  transition: ${transitionValue};
`;

const gradientStriped = (
  color1: string,
  color2: string,
  angle = "-45deg"
) => css`
  background-image: -webkit-linear-gradient(
    ${angle},
    ${color1} 25%,
    ${color2} 25%,
    ${color2} 50%,
    ${color1} 50%,
    ${color1} 75%,
    ${color2} 75%,
    ${color2} 100%
  );
  background-image: linear-gradient(
    ${angle},
    ${color1} 25%,
    ${color2} 25%,
    ${color2} 50%,
    ${color1} 50%,
    ${color1} 75%,
    ${color2} 75%,
    ${color2} 100%
  );
`;

// Animations
const progressBarAnimate = keyframes`
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
`;

// Styled components
export const Progress = styled.div<{ $bgColor: string }>`
  overflow: hidden;
  height: 7px;
  border-radius: 10px;
  width: 100%;
  background: ${(props) => props.$bgColor};
`;

export const StyledProgressBar = styled.div<{
  $color1: string;
  $color2: string;
  $speed: number;
  $widthPercent: number;
}>`
  width: ${(props) => props.$widthPercent}%;
  height: 100%;
  float: left;
  box-sizing: border-box;
  background-color: #79b;
  background-size: 20px 20px;
  border-radius: 10px;
  ${(props) => gradientStriped(props.$color1, props.$color2)}
  ${transition("width 200ms ease")}

  -webkit-animation: ${progressBarAnimate} ${(props) =>
    props.$speed}s linear infinite;
  animation: ${progressBarAnimate} ${(props) => props.$speed}s linear infinite;
`;

const RawProgressBar: FC<RawProgressBarProps> = ({
  total,
  active,
  color1,
  color2,
  bgColor,
  className,
}) => {
  return (
    <Progress $bgColor={bgColor} className={className}>
      <StyledProgressBar
        $color1={color1}
        $color2={color2}
        $speed={1.5}
        $widthPercent={(active / total) * 100}
      />
    </Progress>
  );
};

export const ProgressBar = withIndentStyles(RawProgressBar);
