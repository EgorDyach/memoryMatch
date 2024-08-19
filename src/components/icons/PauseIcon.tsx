import { FC, SVGProps } from "react";
import withIcon from "@hocs/withIcon";
import styled from "styled-components";

const StyledIcon = styled.svg<{ $color: string }>`
  filter: drop-shadow(0px 2px 0px ${(props) => props.$color});
  -webkit-ffilter: drop-shadow(0px 2px 0px ${(props) => props.$color});
`;

const Icon: FC = (props: SVGProps<SVGSVGElement>) => (
  <StyledIcon
    {...props}
    $color={props.color || "transparent"}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.2119 17.576V3.55427C19.2119 2.91718 18.9589 2.30617 18.5084 1.85568C18.0579 1.40518 17.4469 1.1521 16.8098 1.1521H13.3043C12.6672 1.1521 12.0562 1.40518 11.6057 1.85568C11.1552 2.30617 10.9022 2.91718 10.9022 3.55427V17.576C10.9022 18.2131 11.1552 18.8241 11.6057 19.2746C12.0562 19.7251 12.6672 19.9782 13.3043 19.9782H16.8098C17.4469 19.9782 18.0579 19.7251 18.5084 19.2746C18.9589 18.8241 19.2119 18.2131 19.2119 17.576ZM7.69563 1.1521H4.1902C3.5531 1.1521 2.9421 1.40518 2.49161 1.85568C2.04111 2.30618 1.78802 2.91718 1.78802 3.55427V17.576C1.78802 18.2131 2.04111 18.8241 2.49161 19.2746C2.9421 19.7251 3.5531 19.9782 4.1902 19.9782H7.69563C8.33273 19.9782 8.94373 19.7251 9.39423 19.2746C9.84472 18.8241 10.0978 18.2131 10.0978 17.576V3.55427C10.0978 2.91718 9.84472 2.30617 9.39423 1.85568C8.94373 1.40518 8.33273 1.1521 7.69563 1.1521Z"
      fill="white"
      stroke="#133F5C"
      strokeWidth="2"
    />
  </StyledIcon>
);

const PauseIcon = withIcon(Icon);

PauseIcon.displayName = "PauseIcon";
export default PauseIcon;
