import { FC, SVGProps } from "react";
import withIcon from "@hocs/withIcon";

const Icon: FC = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 16 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_dii_399_1548)">
      <path
        d="M1.5 6.90192C-0.5 8.05662 -0.499999 10.9434 1.5 12.0981L11.25 17.7272C13.25 18.8819 15.75 17.4386 15.75 15.1292L15.75 3.87083C15.75 1.56143 13.25 0.118057 11.25 1.27276L1.5 6.90192Z"
        fill="#88DBFF"
      />
    </g>
    <defs>
      <filter
        id="filter0_dii_399_1548"
        x="0"
        y="0.866455"
        width="15.75"
        height="19.2671"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_399_1548"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_399_1548"
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
          result="effect2_innerShadow_399_1548"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="-1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="effect2_innerShadow_399_1548"
          result="effect3_innerShadow_399_1548"
        />
      </filter>
    </defs>
  </svg>
);

const ArrowLeftIcon = withIcon(Icon);

ArrowLeftIcon.displayName = "ArrowLeftIcon";
export default ArrowLeftIcon;
