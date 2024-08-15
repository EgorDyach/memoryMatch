import styled from "styled-components";

import { ReactNode } from "react";
import { indent } from "@lib/theme/sizes";
import { background } from "@lib/theme/colors";
import { ButtonType } from "./Button";
import { shadow, textShadow } from "@lib/theme/shadow";

export type ShadowType = "full" | "min" | "custom";

export const StyledButton = styled.button<{
  icon?: ReactNode;
  $type: ButtonType;
  $borderRadius: number;
  padding?: string;
  $shadowType?: ShadowType;
  $customShadow?: string;
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
  ${(props) => {
    switch (props.$type) {
      case "pink":
        return `
          ${textShadow("#623378")};
          background-color: ${background.pinkBg};
          `;
      case "yellow":
        return `
            ${textShadow("#E0622C")};
            background-color: ${background.yellowBg};
            `;
      case "blue":
        return `
              ${textShadow("#092E46")};
              background-color: ${background.blueBg};
              `;
      case "danger":
        return `
                background-color: ${background.dangerBg};
                `;

      default:
        return "transparent";
    }
  }};
  border: ${(props) =>
    props.$type === "default" ? `1px solid #cfd6dd` : "none"};

  ${({ $shadowType }) => $shadowType === "full" && shadow("full")}

  & svg {
    transition: transform 0.3s ease;
    ${(props) =>
      props.$type === "danger" &&
      `
      transform: rotate(135deg);
    `}
  }

  &:disabled {
    background-color: ${background.disabled};
    ${textShadow("#5C5C5C")};
    ${shadow("min")}
  }
`;
