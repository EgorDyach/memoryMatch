import { FC, SVGProps } from "react";
import withIcon from "@hocs/withIcon";

const Icon: FC = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_399_1870)">
      <path
        d="M9.22353 1.43489C9.96912 -0.00675285 12.0309 -0.00675011 12.7765 1.43489L14.4664 4.70251C14.7566 5.26358 15.2948 5.65459 15.9181 5.75719L19.548 6.35469C21.1495 6.6183 21.7866 8.57915 20.6459 9.73375L18.0605 12.3507C17.6165 12.8001 17.4109 13.4328 17.506 14.0573L18.0594 17.6941C18.3036 19.2987 16.6356 20.5106 15.185 19.7825L11.8972 18.1323C11.3326 17.8489 10.6674 17.8489 10.1028 18.1323L6.81497 19.7825C5.36439 20.5106 3.6964 19.2987 3.94057 17.6941L4.49402 14.0573C4.58905 13.4328 4.38349 12.8001 3.93954 12.3507L1.35408 9.73375C0.213398 8.57915 0.850518 6.6183 2.45201 6.35469L6.08192 5.75719C6.7052 5.65459 7.24338 5.26358 7.53356 4.70251L9.22353 1.43489Z"
        fill="white"
      />
      <path
        d="M9.66764 1.66458C10.2268 0.583351 11.7732 0.583351 12.3324 1.66459L14.0223 4.9322C14.385 5.63354 15.0578 6.12231 15.8369 6.25055L19.4668 6.84805C20.6679 7.04576 21.1457 8.5164 20.2902 9.38235L17.7048 11.9993C17.1498 12.561 16.8929 13.3519 17.0117 14.1325L17.5651 17.7694C17.7483 18.9728 16.4973 19.8817 15.4093 19.3356L12.1215 17.6854C11.4158 17.3312 10.5842 17.3312 9.87855 17.6854L6.59068 19.3356C5.50275 19.8817 4.25175 18.9728 4.43488 17.7694L4.98833 14.1325C5.10712 13.3519 4.85016 12.561 4.29523 11.9993L1.70977 9.38234C0.854259 8.5164 1.3321 7.04576 2.53321 6.84805L6.16313 6.25055C6.94223 6.12231 7.61496 5.63354 7.97768 4.9322L9.66764 1.66458Z"
        stroke="#B7134D"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_399_1870"
        x="0.774902"
        y="0.35376"
        width="20.4502"
        height="21.6453"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
          values="0 0 0 0 0.717647 0 0 0 0 0.0745098 0 0 0 0 0.301961 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_399_1870"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_399_1870"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const RedStarIcon = withIcon(Icon);

RedStarIcon.displayName = "RedStarIcon";
export default RedStarIcon;
