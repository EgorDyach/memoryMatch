import { FC, SVGProps } from "react";
import withIcon from "@hocs/withIcon";
import styled from "styled-components";

const StyledIcon = styled.svg<{ $color: string }>`
  filter: drop-shadow(0px 2px 0px ${(props) => props.$color});
`;

const Icon: FC = (props: SVGProps<SVGSVGElement>) => (
  <StyledIcon
    $color={props.color || "transparent"}
    width="32"
    height="44"
    viewBox="0 0 32 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_0_319)">
      <path
        d="M28 14H26V10C26 4.48 21.52 0 16 0C10.48 0 6 4.48 6 10V14H4C1.79 14 0 15.79 0 18V38C0 40.21 1.79 42 4 42H28C30.21 42 32 40.21 32 38V18C32 15.79 30.21 14 28 14ZM16 32C13.79 32 12 30.21 12 28C12 25.79 13.79 24 16 24C18.21 24 20 25.79 20 28C20 30.21 18.21 32 16 32ZM22.2 14H9.8V10C9.8 6.58 12.58 3.8 16 3.8C19.42 3.8 22.2 6.58 22.2 10V14Z"
        fill="white"
      />
      <path
        d="M25.5 14V14.5H26H28C29.9339 14.5 31.5 16.0661 31.5 18V38C31.5 39.9339 29.9339 41.5 28 41.5H4C2.06614 41.5 0.5 39.9339 0.5 38V18C0.5 16.0661 2.06614 14.5 4 14.5H6H6.5V14V10C6.5 4.75614 10.7561 0.5 16 0.5C21.2439 0.5 25.5 4.75614 25.5 10V14ZM22.2 14.5H22.7V14V10C22.7 6.30386 19.6961 3.3 16 3.3C12.3039 3.3 9.3 6.30386 9.3 10V14V14.5H9.8H22.2ZM11.5 28C11.5 30.4861 13.5139 32.5 16 32.5C18.4861 32.5 20.5 30.4861 20.5 28C20.5 25.5139 18.4861 23.5 16 23.5C13.5139 23.5 11.5 25.5139 11.5 28Z"
        stroke={props.color}
      />
    </g>
  </StyledIcon>
);

const LockIcon = withIcon(Icon);

LockIcon.displayName = "LockIcon";
export default LockIcon;
