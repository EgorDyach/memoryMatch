import { FC, SVGProps } from "react";
import withIcon from "@hocs/withIcon";

const Icon: FC = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 20 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_399_5398)">
      <path
        d="M18.0902 13.2391L3.77411 21.4424C2.55917 22.1379 1 21.2958 1 19.8938V3.48718C1 2.08737 2.55692 1.24305 3.77411 1.94073L18.0902 10.144C18.3665 10.2998 18.5963 10.5251 18.7561 10.7968C18.9158 11.0686 19 11.3773 19 11.6916C19 12.0059 18.9158 12.3145 18.7561 12.5863C18.5963 12.8581 18.3665 13.0833 18.0902 13.2391Z"
        fill="white"
      />
      <path
        d="M4.02251 21.8764L4.0227 21.8763L18.3357 13.6747C18.3362 13.6744 18.3368 13.6741 18.3373 13.6738C18.6893 13.475 18.9826 13.1875 19.1871 12.8397C19.3919 12.4914 19.5 12.0953 19.5 11.6916C19.5 11.2879 19.3919 10.8918 19.1871 10.5434C18.9826 10.1957 18.6893 9.90816 18.3373 9.70937C18.3368 9.70907 18.3362 9.70877 18.3357 9.70847L4.02276 1.50694C4.02274 1.50692 4.02272 1.50691 4.0227 1.5069C2.4963 0.632041 0.5 1.67573 0.5 3.48718V19.8938C0.5 21.708 2.49894 22.7485 4.02251 21.8764Z"
        stroke="#E0622C"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_399_5398"
        x="0"
        y="0.69376"
        width="20"
        height="24.527"
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
          values="0 0 0 0 0.878431 0 0 0 0 0.384314 0 0 0 0 0.172549 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_399_5398"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_399_5398"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const PlayIcon = withIcon(Icon);

PlayIcon.displayName = "PlayIcon";
export default PlayIcon;
