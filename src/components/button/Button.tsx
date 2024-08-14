import { FC, PropsWithChildren, ReactNode } from "react";
import { StyledButton } from "./ButtonStyles";
import { withIndentStyles } from "@hocs/withIndentStyles";

export interface ButtonProps extends PropsWithChildren {
  onClick?: VoidFunction;
  disabled?: boolean;
  type?: ButtonType;
  icon?: ReactNode;
  borderRadius?: number;
  padding?: string;
  className?: string;
}

export type ButtonType = "pink" | "yellow" | "blue" | "default" | "danger";

const RawButton: FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  type = "pink",
  icon,
  borderRadius = 10,
  padding,
  className,
}) => (
  <StyledButton
    className={className}
    onClick={onClick}
    $borderRadius={borderRadius}
    $type={type}
    disabled={disabled}
    icon={icon}
    padding={padding}
  >
    {icon}
    {children}
  </StyledButton>
);

const Button = withIndentStyles(RawButton);
export default Button;
