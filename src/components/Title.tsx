import { FC, PropsWithChildren } from "react";
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

const TitleWrapper = styled(Flex)<{ $type: ButtonType }>`
  width: 100%;
  padding: 10px;
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
  border-top: 1px solid #B7134D
  box-shadow: 0px 2px 0px 0px #B7134D, 0px 4.19px 0px 0px #00000040;  
  ${textShadow("#B7134D", 2, 1)};
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
      {hasStars && type === "pink" && <PinkStarIcon size={26} />}
      {hasStars && type === "red" && <RedStarIcon size={26} />}
      <ItemTitle>{children}</ItemTitle>
      {hasStars && type === "pink" && <PinkStarIcon size={26} />}
      {hasStars && type === "red" && <RedStarIcon size={26} />}
    </TitleWrapper>
  );
};

export const Title = withIndentStyles(RawTitle);
