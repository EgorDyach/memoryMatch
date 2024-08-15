import { FC, PropsWithChildren, ReactNode } from "react";
import { ButtonType } from "./button/Button";
import Flex from "./Flex";
import styled from "styled-components";
import { withIndentStyles } from "@hocs/withIndentStyles";
import { ItemTitle } from "./Typography";
import PinkStarIcon from "./icons/PinkStarIcon";
import RedStarIcon from "./icons/RedStarIcon";
import { textShadow } from "@lib/theme/shadow";

interface TitleProps extends PropsWithChildren {
  type: ButtonType;
  hasStars?: boolean;
  className?: string;
}

const coloredStars: Record<ButtonType, ReactNode> = {
  pink: <PinkStarIcon size={22} />,
  yellow: "",
  blue: "",
  default: "",
  danger: "",
  red: <RedStarIcon size={22} />,
};

const TitleWrapper = styled(Flex)<{ $type: ButtonType }>`
  width: 100%;
  padding: 8px 11px 5px;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  ${({ $type }) =>
    $type === "pink" &&
    `
    color: #fff;
    background-color: #E360EA;
    border-top: 1px solid #C73CDC;
    box-shadow: 0px 2px 0px 0px #C73CDC, 0px 4.19px 0px 0px #00000040;
    ${textShadow("#C73CDC", 2, 1)};
    `}
  ${({ $type }) =>
    $type === "red" &&
    `
  color: #fff;
  background-color: #FB0059;
  border-top: 1px solid #B7134D;
  box-shadow: 0px 2px 0px 0px #B7134D, 0px 4.19px 0px 0px #00000040;  
  ${textShadow("#B7134D", 2, 1)};
  `}
  ${({ $type }) =>
    $type === "default" &&
    `
  color: #fff;
  background-color: #19547B;
  border-top: 1px solid #072234;
  box-shadow: 0px 2px 0px 0px #072234, 0px 4.19px 0px 0px #00000040;
  ${textShadow("#072234", 2, 1)};
  `}
`;

const RawTitle: FC<TitleProps> = ({
  children,
  type = "pink",
  hasStars,
  className,
}) => {
  return (
    <TitleWrapper className={className} $type={type}>
      {hasStars ? coloredStars[type] : <div></div>}
      <ItemTitle>{children}</ItemTitle>
      {hasStars ? coloredStars[type] : <div></div>}
    </TitleWrapper>
  );
};

export const Title = withIndentStyles(RawTitle);
