import { FC, SVGProps } from "react";
import withIcon from "@hocs/withIcon";

const Icon: FC = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 22 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_ii_399_2321)">
      <path
        d="M21.815 6.37836C21.815 3.09027 19.1993 0.424805 15.9731 0.424805C14.0146 0.424805 12.2864 1.41003 11.226 2.91591C10.1656 1.41003 8.43738 0.424805 6.47943 0.424805C3.25269 0.424805 0.636963 3.08967 0.636963 6.37836C0.636963 6.84412 0.694985 7.29541 0.794451 7.7304C1.60558 12.8665 7.20944 18.2849 11.226 19.7727C15.242 18.2849 20.8464 12.8665 21.6563 7.731C21.757 7.29601 21.815 6.84473 21.815 6.37836Z"
        fill="#FF1432"
      />
    </g>
    <defs>
      <filter
        id="filter0_ii_399_2321"
        x="0.636963"
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
          result="effect1_innerShadow_399_2321"
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
          in2="effect1_innerShadow_399_2321"
          result="effect2_innerShadow_399_2321"
        />
      </filter>
    </defs>
  </svg>
);

const ActiveHeartIcon = withIcon(Icon);

ActiveHeartIcon.displayName = "ActiveHeartIcon";
export default ActiveHeartIcon;
