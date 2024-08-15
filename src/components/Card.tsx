import { FC, PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";
import Flex from "./Flex";
import { ItemTitle } from "./Typography";
import { shadow, textShadow } from "@lib/theme/shadow";
import { withIndentStyles } from "@hocs/withIndentStyles";
import { ShadowType } from "./button/ButtonStyles";

interface CardProps extends PropsWithChildren {
  title?: ReactNode;
  backgroundColor: string;
  contentColor: string;
  titleColor?: string;
  titleShadowColor?: string;
  className?: string;
  borderRadius?: number;
  padding?: string;
  shadow?: ShadowType;
}

const StyledCard = styled(Flex)<{
  $bgColor: string;
  $borderRadius?: number;
  $padding?: string;
  $shadow?: ShadowType;
}>`
  background: ${(props) => props.$bgColor};
  border-radius: ${(props) => props.$borderRadius || 9.44}px;
  ${(props) => shadow(props.$shadow || "full")};
  padding: ${(props) => props.$padding || "6px 10px 10px"};
`;

const Content = styled(Flex)<{
  $bgColor: string;
  $borderRadius?: number;
  $shadow?: ShadowType;
}>`
  background: ${(props) => props.$bgColor};
  border-radius: ${(props) => props.$borderRadius || 9.44}px;
  padding: 15px;
  width: 100%;
  ${(props) => shadow(props.$shadow || "full")};
`;

const StyledItemTitle = styled(ItemTitle)<{ $color: string; $shadow?: string }>`
  color: ${(props) => props.$color};
  font-size: 25px;
  ${(props) => props.$shadow && textShadow(props.$shadow, 2, 1)};
`;

const RawCard: FC<CardProps> = ({
  children,
  title,
  backgroundColor,
  contentColor,
  titleShadowColor,
  titleColor = "#fff",
  className,
  padding,
  shadow,
  borderRadius,
}) => {
  return (
    <StyledCard
      direction="column"
      className={className}
      align="center"
      $bgColor={backgroundColor}
      $borderRadius={borderRadius}
      $padding={padding}
      $shadow={shadow}
    >
      {title && (
        <StyledItemTitle $shadow={titleShadowColor} $color={titleColor}>
          {title}
        </StyledItemTitle>
      )}
      <Content
        direction="column"
        $bgColor={contentColor}
        $borderRadius={borderRadius}
      >
        {children}
      </Content>
    </StyledCard>
  );
};

export const Card = withIndentStyles(RawCard);
