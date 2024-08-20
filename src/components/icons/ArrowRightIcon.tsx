import { FC, SVGProps } from "react";
import withIcon from "@hocs/withIcon";

const Icon: FC = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 16 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_dii_399_1547)">
      <path
        d="M14.5 6.90192C16.5 8.05662 16.5 10.9434 14.5 12.0981L4.75 17.7272C2.75 18.8819 0.249999 17.4386 0.249999 15.1292L0.25 3.87083C0.25 1.56143 2.75 0.118057 4.75 1.27276L14.5 6.90192Z"
        fill="#88DBFF"
      />
    </g>
    <defs>
      <filter
        id="filter0_dii_399_1547"
        x="0.25"
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
          result="effect1_dropShadow_399_1547"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_399_1547"
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
          result="effect2_innerShadow_399_1547"
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
          in2="effect2_innerShadow_399_1547"
          result="effect3_innerShadow_399_1547"
        />
      </filter>
    </defs>
  </svg>
);

const ArrowRightIcon = withIcon(Icon);

ArrowRightIcon.displayName = "ArrowRightIcon";
export default ArrowRightIcon;
