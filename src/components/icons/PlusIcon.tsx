import { FC, SVGProps } from "react";
import withIcon from "@hocs/withIcon";

const Icon: FC = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 19 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_399_1237)">
      <path
        d="M12.1689 6.20583H16.018C16.5439 6.20583 16.9014 6.311 17.0907 6.52133C17.3011 6.71064 17.4062 7.06821 17.4062 7.59405V10.7806C17.4062 11.3065 17.3011 11.6746 17.0907 11.8849C16.9014 12.0742 16.5439 12.1689 16.018 12.1689H12.1689V16.018C12.1689 16.5439 12.0637 16.912 11.8534 17.1223C11.6641 17.3116 11.3065 17.4062 10.7806 17.4062H7.59405C7.06821 17.4062 6.70012 17.3116 6.48978 17.1223C6.30048 16.912 6.20583 16.5439 6.20583 16.018V12.1689H2.38822C1.86238 12.1689 1.49429 12.0742 1.28395 11.8849C1.09465 11.6746 1 11.3065 1 10.7806V7.59405C1 7.06821 1.09465 6.71064 1.28395 6.52133C1.49429 6.311 1.86238 6.20583 2.38822 6.20583H6.20583V2.38822C6.20583 1.86238 6.30048 1.50481 6.48978 1.3155C6.70012 1.10517 7.06821 1 7.59405 1H10.7806C11.3065 1 11.6641 1.10517 11.8534 1.3155C12.0637 1.50481 12.1689 1.86238 12.1689 2.38822V6.20583Z"
        fill="white"
      />
      <path
        d="M6.11814 17.4568L6.13574 17.4763L6.1553 17.4939C6.50911 17.8124 7.03866 17.9062 7.59405 17.9062H10.7806C11.3271 17.9062 11.8667 17.816 12.2069 17.4758C12.5612 17.1216 12.6689 16.5827 12.6689 16.018V12.6689H16.018C16.5645 12.6689 17.1041 12.5786 17.4443 12.2385C17.7986 11.8842 17.9062 11.3453 17.9062 10.7806V7.59405C17.9062 7.0473 17.8057 6.50787 17.4446 6.1675C17.1042 5.80642 16.5648 5.70583 16.018 5.70583H12.6689V2.38822C12.6689 1.84147 12.5683 1.30205 12.2072 0.96168C11.8668 0.600597 11.3274 0.5 10.7806 0.5H7.59405C7.02936 0.5 6.49053 0.607654 6.13623 0.961951C5.79606 1.30212 5.70583 1.84172 5.70583 2.38822V5.70583H2.38822C1.82353 5.70583 1.2847 5.81348 0.930401 6.16778L1.28395 6.52133L0.930401 6.16778C0.590229 6.50795 0.5 7.04755 0.5 7.59405V10.7806C0.5 11.336 0.593876 11.8656 0.912307 12.2194L0.929912 12.239L0.949472 12.2566C1.30328 12.575 1.83283 12.6689 2.38822 12.6689H5.70583V16.018C5.70583 16.5734 5.79971 17.103 6.11814 17.4568Z"
        stroke="#C73CDC"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_399_1237"
        x="0"
        y="0"
        width="18.4062"
        height="20.4062"
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
          values="0 0 0 0 0.780392 0 0 0 0 0.235294 0 0 0 0 0.862745 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_399_1237"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_399_1237"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const PlusIcon = withIcon(Icon);

PlusIcon.displayName = "PlusIcon";
export default PlusIcon;
