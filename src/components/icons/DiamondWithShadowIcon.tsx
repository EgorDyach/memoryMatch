import { FC, SVGProps } from "react";
import withIcon from "@hocs/withIcon";

const Icon: FC = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 16 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_399_4465)">
      <path d="M1 8L8 15L15 8L8 1L1 8Z" fill="#38ACFF" />
      <path
        d="M0.646446 8.35355C0.451184 8.15829 0.451184 7.84171 0.646446 7.64645L7.64644 0.646447C7.74021 0.552679 7.86739 0.5 8 0.5C8.13261 0.5 8.25978 0.552679 8.35355 0.646447L15.3536 7.64645C15.4473 7.74021 15.5 7.86739 15.5 8C15.5 8.13261 15.4473 8.25978 15.3536 8.35355L8.35355 15.3536C8.15829 15.5488 7.84171 15.5488 7.64644 15.3536L0.646446 8.35355Z"
        stroke="#092E46"
        stroke-linejoin="round"
      />
    </g>
    <circle cx="9.94493" cy="9.75133" r="0.194444" fill="#2594E4" />
    <circle cx="9.94493" cy="10.5279" r="0.194444" fill="#2594E4" />
    <circle cx="9.16637" cy="11.3072" r="0.194444" fill="#2594E4" />
    <circle cx="8.58312" cy="12.0841" r="0.194444" fill="#2594E4" />
    <circle cx="8.9713" cy="9.16686" r="0.194444" fill="#2594E4" />
    <circle cx="10.9164" cy="8.58409" r="0.194444" fill="#2594E4" />
    <circle cx="9.84684" cy="8.68132" r="0.291667" fill="#2594E4" />
    <circle cx="9.06852" cy="10.4313" r="0.291667" fill="#2594E4" />
    <path d="M1 8L8 1L15 8L1 8Z" fill="#63BDFF" />
    <path
      d="M7.90185 1.97314L5.27686 7.61203"
      stroke="#88CDFF"
      stroke-width="0.178721"
      stroke-linecap="round"
    />
    <path d="M4.5 8L8 15L0.999999 8L8 1L4.5 8Z" fill="#46CAF3" />
    <path d="M2.55555 8L8 15L0.999999 8L8 1L2.55555 8Z" fill="#C1E9FF" />
    <path d="M4.5 8L8 1L0.999999 8L4.5 8Z" fill="#68DBFF" />
    <path d="M2.55555 8L8 1L0.999999 8L2.55555 8Z" fill="#D8F1FF" />
    <path d="M11.5 8L8 15L15 8L8 1L11.5 8Z" fill="#4E5CDE" />
    <path d="M11.5 8L8 1L15 8L11.5 8Z" fill="#6A78F5" />
    <path d="M13.4444 8L8 15L15 8L8 1L13.4444 8Z" fill="#2D88F3" />
    <path d="M13.4444 8L8 1L15 8L13.4444 8Z" fill="#52A1FE" />
    <path
      d="M4.69415 4.69653L1.97192 7.6132"
      stroke="white"
      stroke-width="0.178721"
      stroke-linecap="round"
    />
    <defs>
      <filter
        id="filter0_d_399_4465"
        x="0"
        y="0"
        width="16"
        height="17.0345"
        filterUnits="userSpaceOnUse"
        colorInterpolationfilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1.03452" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0352941 0 0 0 0 0.180392 0 0 0 0 0.27451 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_399_4465"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_399_4465"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const DiamondWithShadowIcon = withIcon(Icon);

DiamondWithShadowIcon.displayName = "DiamondWithShadowIcon";
export default DiamondWithShadowIcon;
