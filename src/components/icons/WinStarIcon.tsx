import { FC, SVGProps } from "react";
import withIcon from "@hocs/withIcon";

const Icon: FC = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 78 76"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_399_5700)">
      <path
        d="M33.2783 11.3638C35.6671 6.69945 42.3333 6.69945 44.722 11.3638L48.9017 19.5251C49.8544 21.3853 51.6517 22.6662 53.7209 22.9597L62.6753 24.2296C68.0065 24.9856 70.1016 31.5684 66.1881 35.2668L59.9951 41.1194C58.4246 42.6036 57.7048 44.7775 58.0793 46.9057L59.569 55.3719C60.4869 60.5882 55.0566 64.6143 50.3321 62.2204L41.9058 57.9509C40.0793 57.0254 37.9211 57.0254 36.0946 57.9509L27.6683 62.2204C22.9437 64.6143 17.5135 60.5882 18.4314 55.3719L19.9211 46.9057C20.2956 44.7775 19.5758 42.6036 18.0053 41.1194L11.8122 35.2668C7.89879 31.5684 9.99389 24.9857 15.325 24.2296L24.2794 22.9597C26.3486 22.6662 28.146 21.3853 29.0986 19.5251L33.2783 11.3638Z"
        fill="#FEBC01"
      />
      <path
        d="M45.6757 10.8754C42.8888 5.43368 35.1115 5.43367 32.3247 10.8754L28.145 19.0368C27.3511 20.5869 25.8533 21.6543 24.129 21.8989L15.1746 23.1688C8.95492 24.0508 6.51063 31.7307 11.0763 36.0455L17.2693 41.8981C18.5781 43.1349 19.1779 44.9465 18.8659 46.72L17.3762 55.1862C16.3053 61.2719 22.6406 65.9691 28.1526 63.1762L36.5788 58.9066C38.1009 58.1354 39.8994 58.1354 41.4215 58.9066L49.8478 63.1762C55.3598 65.9691 61.6951 61.2719 60.6242 55.1862L59.1345 46.72C58.8224 44.9465 59.4222 43.1349 60.731 41.8981L66.924 36.0455C71.4897 31.7307 69.0454 24.0508 62.8257 23.1688L53.8714 21.8989C52.147 21.6543 50.6492 20.5869 49.8554 19.0368L45.6757 10.8754Z"
        stroke="#E0622C"
        strokeWidth="2.14286"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_399_5700"
        x="7.64697"
        y="5.72267"
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
          values="0 0 0 0 0.878431 0 0 0 0 0.384314 0 0 0 0 0.172549 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_399_5700"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_399_5700"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const WinStarIcon = withIcon(Icon);

WinStarIcon.displayName = "WinStarIcon";
export default WinStarIcon;
