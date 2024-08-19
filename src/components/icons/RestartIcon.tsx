import { FC, SVGProps } from "react";
import withIcon from "@hocs/withIcon";

const Icon: FC = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_399_6098)">
      <path
        d="M17.1261 8.6908C19.2492 8.69083 21.3039 9.4414 22.9271 10.8098C24.5503 12.1783 25.6374 14.0765 25.9964 16.169C26.3554 18.2615 25.9631 20.4135 24.8888 22.2447C23.8146 24.0759 22.1276 25.4684 20.1259 26.1761C18.1243 26.8838 15.9369 26.861 13.9504 26.1119C11.9639 25.3628 10.3062 23.9356 9.2702 22.0824C8.23423 20.2293 7.88674 18.0696 8.28912 15.985C8.69151 13.9004 9.81787 12.0252 11.4691 10.6908M8.12622 10.1908H12.1262V14.1908"
        stroke="#092E46"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        shapeRendering="crispEdges"
      />
    </g>
    <path
      d="M17.1261 8.69092C19.2492 8.69095 21.3039 9.44152 22.9271 10.81C24.5503 12.1784 25.6374 14.0766 25.9964 16.1691C26.3554 18.2616 25.9631 20.4136 24.8888 22.2448C23.8146 24.0761 22.1276 25.4686 20.1259 26.1762C18.1243 26.8839 15.9369 26.8612 13.9504 26.1121C11.9639 25.363 10.3062 23.9357 9.2702 22.0826C8.23423 20.2294 7.88674 18.0697 8.28912 15.9851C8.69151 13.9006 9.81787 12.0253 11.4691 10.6909M8.12622 10.1909H12.1262V14.1909"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <filter
        id="filter0_d_399_6098"
        x="5.62598"
        y="6.1908"
        width="23"
        height="25.5324"
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
          values="0 0 0 0 0.0352941 0 0 0 0 0.180392 0 0 0 0 0.27451 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_399_6098"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_399_6098"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const RestartIcon = withIcon(Icon);

RestartIcon.displayName = "RestartIcon";
export default RestartIcon;
