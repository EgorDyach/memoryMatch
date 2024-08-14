import styled from "styled-components";

import { ReactNode } from "react";
import { indent } from "@lib/theme/sizes";
import { background } from "@lib/theme/colors";
import { ButtonType } from "./Button";

export const StyledButton = styled.button<{
  icon?: ReactNode;
  $type: ButtonType;
  $borderRadius: number;
  padding?: string;
}>`
  padding: ${(props) => props.padding || `${indent.medium} ${indent.xlarge}`};
  padding-left: ${(props) => props.icon && "12px"};
  transition: background-color 0.3s ease;
  font-size: ${indent.medium};
  line-height: ${indent.medium};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.$borderRadius}px;
  color: ${(props) => (props.$type === "default" ? "#333" : "#fff")};
  cursor: pointer;
  background-color: ${(props) => {
    switch (props.$type) {
      case "pink":
        return background.pinkBg;
      case "yellow":
        return background.yellowBg;
      case "blue":
        return background.blueBg;
      case "danger":
        return background.pinkBg;
      case "default":
        return "transparent";
      default:
        return "transparent";
    }
  }};
  border: ${(props) =>
    props.$type === "default" ? `1px solid #cfd6dd` : "none"};

  box-shadow: 0px 2px 0px 0px #0000001a;

  box-shadow: 0px 0.81px 2.85px 0px #00000040;

  box-shadow: 0px 1.95px 0px 0px #0000001a;

  box-shadow: 0px 1.63px 0px 0px #ffffff40 inset;

  box-shadow: 0px -1.63px 0px 0px #00000040 inset;

  & svg {
    transition: transform 0.3s ease;
    ${(props) =>
      props.$type === "danger" &&
      `
      transform: rotate(135deg);
    `}
  }
`;
