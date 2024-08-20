import { FC, SVGProps } from "react";
import withIcon from "@hocs/withIcon";

const Icon: FC = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 64 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_399_6094)">
      <path
        d="M26.2783 6.17266C28.6671 1.50835 35.3333 1.50835 37.722 6.17267L41.9017 14.334C42.8544 16.1942 44.6517 17.4751 46.7209 17.7686L55.6753 19.0385C61.0065 19.7945 63.1016 26.3773 59.1881 30.0757L52.9951 35.9283C51.4246 37.4125 50.7048 39.5864 51.0793 41.7146L52.569 50.1808C53.4869 55.3971 48.0566 59.4232 43.3321 57.0293L34.9058 52.7598C33.0793 51.8343 30.9211 51.8343 29.0946 52.7598L20.6683 57.0293C15.9437 59.4232 10.5135 55.3971 11.4314 50.1808L12.9211 41.7146C13.2956 39.5864 12.5758 37.4125 11.0053 35.9283L4.81224 30.0756C0.898786 26.3773 2.99389 19.7945 8.32505 19.0385L17.2794 17.7686C19.3486 17.4751 21.146 16.1942 22.0986 14.334L26.2783 6.17266Z"
        fill="#24656D"
      />
      <path
        d="M38.6757 5.68428C35.8888 0.242581 28.1115 0.242568 25.3247 5.68427L21.145 13.8456C20.3511 15.3958 18.8533 16.4632 17.129 16.7078L8.17461 17.9777C1.95492 18.8597 -0.489369 26.5396 4.07633 30.8544L10.2693 36.707C11.5781 37.9438 12.1779 39.7554 11.8659 41.5289L10.3762 49.9951C9.3053 56.0808 15.6406 60.778 21.1526 57.9851L29.5788 53.7155C31.1009 52.9443 32.8994 52.9443 34.4215 53.7155L42.8478 57.9851C48.3598 60.778 54.6951 56.0808 53.6242 49.9951L52.1345 41.5289C51.8224 39.7554 52.4222 37.9438 53.731 36.707L59.924 30.8544C64.4897 26.5396 62.0454 18.8597 55.8257 17.9777L46.8714 16.7078C45.147 16.4632 43.6492 15.3958 42.8554 13.8457L38.6757 5.68428Z"
        stroke="#0F3F49"
        strokeWidth="2.14286"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_399_6094"
        x="0.646973"
        y="0.53157"
        width="62.7065"
        height="63.6389"
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
        <feOffset dy="4.28571" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0588235 0 0 0 0 0.247059 0 0 0 0 0.286275 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_399_6094"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_399_6094"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const FailedStarIcon = withIcon(Icon);

FailedStarIcon.displayName = "FailedStarIcon";
export default FailedStarIcon;
