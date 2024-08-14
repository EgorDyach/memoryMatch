import { FC, SVGProps } from "react";
import withIcon from "@hocs/withIcon";

const Icon: FC = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 43 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_399_2659)">
      <path
        d="M1.77166 22.1033C1.64556 21.9772 1.64556 21.7728 1.77166 21.6467L21.6467 1.77166C21.7072 1.71111 21.7894 1.67708 21.875 1.67708C21.9606 1.67708 22.0428 1.71111 22.1033 1.77166L41.9783 21.6467C42.0389 21.7072 42.0729 21.7894 42.0729 21.875C42.0729 21.9606 42.0389 22.0428 41.9783 22.1033L22.1033 41.9783C21.9772 42.1044 21.7728 42.1044 21.6467 41.9783L1.77166 22.1033Z"
        fill="#38ACFF"
        stroke="#042360"
        strokeWidth="0.645833"
        strokeLinejoin="round"
      />
      <circle cx="27.3955" cy="26.8436" r="0.552083" fill="#2594E4" />
      <circle cx="27.3955" cy="29.0518" r="0.552083" fill="#2594E4" />
      <circle cx="25.1871" cy="31.2603" r="0.552083" fill="#2594E4" />
      <circle cx="23.5308" cy="33.4686" r="0.552083" fill="#2594E4" />
      <circle cx="24.6352" cy="25.1873" r="0.552083" fill="#2594E4" />
      <circle cx="30.1558" cy="23.5311" r="0.552083" fill="#2594E4" />
      <circle cx="27.1194" cy="23.8071" r="0.828125" fill="#2594E4" />
      <circle cx="24.9113" cy="28.7759" r="0.828125" fill="#2594E4" />
      <path d="M2 21.875L21.875 2L41.75 21.875L2 21.875Z" fill="#63BDFF" />
      <path
        d="M21.5991 4.7605L14.146 20.7709"
        stroke="#88CDFF"
        strokeWidth="0.645833"
        strokeLinecap="round"
      />
      <path
        d="M11.9375 21.875L21.875 41.75L2 21.875L21.875 2L11.9375 21.875Z"
        fill="#46CAF3"
      />
      <path
        d="M6.41666 21.875L21.875 41.75L2 21.875L21.875 2L6.41666 21.875Z"
        fill="#C1E9FF"
      />
      <path
        d="M11.9375 21.875L21.875 2L2 21.875L11.9375 21.875Z"
        fill="#68DBFF"
      />
      <path
        d="M6.41666 21.875L21.875 2L2 21.875L6.41666 21.875Z"
        fill="#D8F1FF"
      />
      <path
        d="M31.8125 21.875L21.875 41.75L41.75 21.875L21.875 2L31.8125 21.875Z"
        fill="#4E5CDE"
      />
      <path
        d="M31.8125 21.875L21.875 2L41.75 21.875L31.8125 21.875Z"
        fill="#6A78F5"
      />
      <path
        d="M37.3333 21.875L21.875 41.75L41.75 21.875L21.875 2L37.3333 21.875Z"
        fill="#2D88F3"
      />
      <path
        d="M37.3333 21.875L21.875 2L41.75 21.875L37.3333 21.875Z"
        fill="#52A1FE"
      />
      <path
        d="M12.4895 12.4895L4.76038 20.7708"
        stroke="white"
        strokeWidth="0.645833"
        strokeLinecap="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_399_2659">
        <rect width="43" height="43" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const DiamondIcon = withIcon(Icon);

DiamondIcon.displayName = "DiamondIcon";
export default DiamondIcon;
