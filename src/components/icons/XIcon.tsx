import { FC, SVGProps } from "react";
import withIcon from "@hocs/withIcon";

const Icon: FC = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 39 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_399_4341)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.0938 34L23.7976 14.767L23.8203 14.785L35.8087 1H31.8025L22.0364 12.22L14.2809 1H3.77404L16.1873 18.9565L16.1858 18.955L3.09375 34H7.09997L17.9576 21.517L26.5869 34H37.0938ZM12.6936 3.99999L31.349 31H28.1742L9.50375 3.99999H12.6936Z"
        fill="white"
      />
      <path
        d="M37.0938 34.5H38.0473L37.505 33.7157L24.4467 14.8267L36.186 1.32811L36.9062 0.5H35.8087H31.8025H31.5748L31.4254 0.671727L22.0818 11.4063L14.6922 0.715697L14.5431 0.5H14.2809H3.77404H2.82055L3.36275 1.28432L15.5539 18.9195L2.71656 33.6718L1.99585 34.5H3.09375H7.09997H7.32775L7.47723 34.3281L17.9124 22.3309L26.1756 34.2843L26.3247 34.5H26.5869H37.0938ZM10.4574 4.49999H12.4313L30.3957 30.5H28.4364L10.4574 4.49999Z"
        stroke="#4B4B4B"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_399_4341"
        x="0.897949"
        y="0"
        width="38.1028"
        height="37"
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
          values="0 0 0 0 0.294118 0 0 0 0 0.294118 0 0 0 0 0.294118 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_399_4341"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_399_4341"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const XIcon = withIcon(Icon);

XIcon.displayName = "XIcon";
export default XIcon;
