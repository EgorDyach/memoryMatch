import { FC, SVGProps } from "react";
import withIcon from "@hocs/withIcon";

const Icon: FC = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 16 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_399_1525)">
      <path
        d="M7.81244 4.97585L10.2257 2.56264C10.5553 2.23296 10.8454 2.07472 11.096 2.08791C11.3465 2.07472 11.6367 2.23296 11.9663 2.56264L13.9642 4.56046C14.2938 4.89014 14.4587 5.18684 14.4587 5.45058C14.4587 5.68795 14.2938 5.97147 13.9642 6.30114L11.5509 8.71436L13.9642 11.1276C14.2938 11.4572 14.4587 11.754 14.4587 12.0177C14.4587 12.2551 14.2938 12.5386 13.9642 12.8682L11.9663 14.8661C11.6367 15.1957 11.3465 15.3672 11.096 15.3804C10.8454 15.3672 10.5553 15.1957 10.2257 14.8661L7.81244 12.4529L5.419 14.8463C5.08933 15.176 4.79922 15.3474 4.54866 15.3606C4.29811 15.3474 4.008 15.176 3.67832 14.8463L1.6805 12.8485C1.35083 12.5188 1.18599 12.2353 1.18599 11.9979C1.18599 11.7342 1.35083 11.4375 1.6805 11.1078L4.07393 8.71436L1.6805 6.32092C1.35083 5.99125 1.18599 5.70773 1.18599 5.47036C1.18599 5.20662 1.35083 4.90992 1.6805 4.58024L3.67833 2.58242C4.008 2.25274 4.29811 2.0945 4.54866 2.10769C4.79922 2.0945 5.08933 2.25274 5.419 2.58242L7.81244 4.97585Z"
        fill="white"
      />
      <path
        d="M11.066 15.951L11.096 15.9526L11.126 15.951C11.5969 15.9262 12.0168 15.6237 12.3704 15.2701L14.3682 13.2723C14.7146 12.9259 15.0301 12.4989 15.0301 12.0177C15.0301 11.5213 14.7293 11.0846 14.3682 10.7235L12.3591 8.71436L14.3682 6.7052C14.7146 6.35884 15.0301 5.93179 15.0301 5.45058C15.0301 4.95417 14.7293 4.51747 14.3682 4.1564L12.3704 2.15858C12.0231 1.81124 11.5897 1.50307 11.096 1.51608C10.6022 1.50307 10.1689 1.81124 9.82159 2.15857L7.81244 4.16773L5.82306 2.17836C5.47573 1.83102 5.04241 1.52285 4.54867 1.53586C4.05492 1.52285 3.6216 1.83102 3.27426 2.17836L1.27644 4.17618C0.915369 4.53725 0.61456 4.97395 0.61456 5.47036C0.61456 5.95157 0.930073 6.37862 1.27644 6.72498L3.26581 8.71436L1.27644 10.7037C0.915368 11.0648 0.61456 11.5015 0.61456 11.9979C0.61456 12.4791 0.930073 12.9062 1.27644 13.2525L3.27426 15.2504C3.62782 15.6039 4.04778 15.9064 4.51863 15.9312L4.54866 15.9328L4.5787 15.9312C5.04955 15.9064 5.46951 15.6039 5.82307 15.2504L7.81244 13.261L9.82159 15.2701C10.1751 15.6237 10.5951 15.9262 11.066 15.951Z"
        stroke="#B92222"
        strokeWidth="1.14286"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_399_1525"
        x="0.0432129"
        y="0.944336"
        width="15.5583"
        height="17.8663"
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
        <feOffset dy="2.28571" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.72549 0 0 0 0 0.133333 0 0 0 0 0.133333 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_399_1525"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_399_1525"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const CrossIcon = withIcon(Icon);

CrossIcon.displayName = "CrossIcon";
export default CrossIcon;
