import { FC, SVGProps } from "react";
import withIcon from "@hocs/withIcon";

const Icon: FC = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 46 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_529_2787)">
      <path
        d="M35.1 1C40.5633 1 45 5.42379 45 11C45 16.5019 40.5633 20.9814 35.1 20.9814C32.4417 20.9814 29.9667 19.9405 28.0967 18.0632L23 13.4907L17.8117 18.1561C16.0333 19.9591 13.54 21 10.9 21C5.43667 21 1 16.5019 1 11C1 5.49814 5.43667 1 10.9 1C13.54 1 16.0333 2.04089 17.9033 3.9368L23 8.50929L28.1883 3.84387C29.9667 2.04089 32.46 1 35.1 1ZM15.3 15.4424L20.25 11L15.3733 6.63197C14.1267 5.36803 12.5683 4.71747 10.9 4.71747C7.47167 4.71747 4.66667 7.52416 4.66667 11C4.66667 14.4758 7.47167 17.2825 10.9 17.2825C12.5683 17.2825 14.1267 16.632 15.3 15.4424ZM30.7 6.55762L25.75 11L30.6267 15.368C31.8733 16.632 33.45 17.2825 35.1 17.2825C38.5283 17.2825 41.3333 14.4758 41.3333 11C41.3333 7.52416 38.5283 4.71747 35.1 4.71747C33.4317 4.71747 31.8733 5.36803 30.7 6.55762Z"
        fill="white"
      />
      <path
        d="M14.966 15.0703L14.9547 15.0804L14.944 15.0913C13.8647 16.1855 12.4347 16.7825 10.9 16.7825C7.75045 16.7825 5.16667 14.2023 5.16667 11C5.16667 7.79766 7.75045 5.21747 10.9 5.21747C12.4303 5.21747 13.8616 5.81132 15.0174 6.98308L15.0282 6.99409L15.0397 7.00441L19.501 11.0004L14.966 15.0703ZM31.034 6.92974L31.0453 6.91957L31.056 6.90873C32.1353 5.8145 33.5653 5.21747 35.1 5.21747C38.2495 5.21747 40.8333 7.79766 40.8333 11C40.8333 14.2023 38.2495 16.7825 35.1 16.7825C33.5873 16.7825 32.1378 16.1881 30.9826 15.0169L30.9718 15.0059L30.9603 14.9956L26.499 10.9996L31.034 6.92974ZM45.5 11C45.5 5.15051 40.8423 0.5 35.1 0.5C32.3347 0.5 29.7168 1.58811 27.843 3.48195L22.9996 7.83722L18.2485 3.5747C16.286 1.59076 13.6691 0.5 10.9 0.5C5.15526 0.5 0.5 5.22729 0.5 11C0.5 16.7727 5.15526 21.5 10.9 21.5C13.6653 21.5 16.2832 20.4119 18.157 18.518L23.0004 14.1628L27.7524 18.4261C29.7141 20.3903 32.312 21.4814 35.1 21.4814C40.8435 21.4814 45.5 16.7739 45.5 11Z"
        stroke="#E0622C"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_529_2787"
        x="0"
        y="0"
        width="46"
        height="24"
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
          values="0 0 0 0 0.878431 0 0 0 0 0.384314 0 0 0 0 0.172549 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_529_2787"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_529_2787"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const InfiniteIcon = withIcon(Icon);

InfiniteIcon.displayName = "InfiniteIcon";
export default InfiniteIcon;