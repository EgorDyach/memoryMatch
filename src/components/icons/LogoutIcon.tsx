import { FC, SVGProps } from "react";
import withIcon from "@hocs/withIcon";

const Icon: FC = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 39 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_399_6105)">
      <path
        d="M23.3571 9.30896H10.5V26.809C10.5 27.472 10.7709 28.1079 11.2532 28.5767C11.7354 29.0456 12.3894 29.309 13.0714 29.309H23.3571M24.6429 23.059L28.5 19.309M28.5 19.309L24.6429 15.559M28.5 19.309H15.6429"
        stroke="#B92222"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        shapeRendering="crispEdges"
      />
    </g>
    <path
      d="M23.3571 9.30896H10.5V26.809C10.5 27.472 10.7709 28.1079 11.2532 28.5767C11.7354 29.0456 12.3894 29.309 13.0714 29.309H23.3571M24.6429 23.059L28.5 19.309M28.5 19.309L24.6429 15.559M28.5 19.309H15.6429"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <filter
        id="filter0_d_399_6105"
        x="8.5"
        y="7.30896"
        width="22"
        height="26.5324"
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
        <feOffset dy="2.53242" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.72549 0 0 0 0 0.133333 0 0 0 0 0.133333 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_399_6105"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_399_6105"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const LogoutIcon = withIcon(Icon);

LogoutIcon.displayName = "LogoutIcon";
export default LogoutIcon;
