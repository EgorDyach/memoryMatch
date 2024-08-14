import { FC } from "react";
import { withIndentStyles } from "@hocs/withIndentStyles";
import styled from "styled-components";
import { ButtonProps } from "./Button";
import { background } from "@lib/theme/colors";
import { ButtonType } from "./Button";

type IconButtonProps = Omit<ButtonProps, "children">;

const StyledIconButton = styled.button<{
  $type: ButtonType;
  $padding?: string;
}>`
  padding: ${(props) => props.$padding || "8px"};
  background-color: transparent;
  border: 0;
  border-radius: 7px;
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

  ${(props) =>
    props.$type === "pink" &&
    `
    border: 2px solid #C73CDC;
    box-shadow: 0px 2px 0px 0px #C73CDC;
    path {
      box-shadow: 0px 2px 0px 0px #C73CDC;
      border: 1px solid #C73CDC;
    }
`}

  ${(props) =>
    props.$type === "blue" &&
    `
    box-shadow: 0px 1.97px 0px 0px #FFFFFF40 inset, 0px -1.97px 0px 0px #00000040 inset, 0px 0.98px 3.44px 0px #00000040, 0px 2.35px 0px 0px #0000001A;

`}
`;

const RawButton: FC<IconButtonProps> = ({
  onClick,
  disabled,
  icon,
  className,
  type = "pink",
  padding,
}) => {
  return (
    <StyledIconButton
      className={className}
      onClick={onClick}
      disabled={disabled}
      $type={type}
      $padding={padding}
    >
      {icon}
    </StyledIconButton>
  );
};

const IconButton = withIndentStyles(RawButton);

export default IconButton;
