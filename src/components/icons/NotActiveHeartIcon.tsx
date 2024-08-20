import { FC, SVGProps } from "react";
import withIcon from "@hocs/withIcon";

const Icon: FC = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 22 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_ii_399_2317)">
      <path
        d="M21.3631 6.37836C21.3631 3.09027 18.7474 0.424805 15.5212 0.424805C13.5627 0.424805 11.8345 1.41003 10.7741 2.91591C9.71371 1.41003 7.98548 0.424805 6.02753 0.424805C2.80079 0.424805 0.185059 3.08967 0.185059 6.37836C0.185059 6.84412 0.243081 7.29541 0.342547 7.7304C1.15367 12.8665 6.75754 18.2849 10.7741 19.7727C14.79 18.2849 20.3945 12.8665 21.2044 7.731C21.3051 7.29601 21.3631 6.84473 21.3631 6.37836Z"
        fill="#575757"
      />
    </g>
    <defs>
      <filter
        id="filter0_ii_399_2317"
        x="0.185059"
        y="0.424805"
        width="21.178"
        height="19.3479"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_399_2317"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="-2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_innerShadow_399_2317"
          result="effect2_innerShadow_399_2317"
        />
      </filter>
    </defs>
  </svg>
);

const NotActiveHeartIcon = withIcon(Icon);

NotActiveHeartIcon.displayName = "NotActiveHeartIcon";
export default NotActiveHeartIcon;
