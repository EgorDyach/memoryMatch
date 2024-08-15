import { FC, SVGProps } from "react";
import withIcon from "@hocs/withIcon";

const Icon: FC = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.4825 12.1172H12.4825C13.2589 12.1172 14.0059 12.4138 14.5708 12.9464C15.1323 13.4759 15.4716 14.1988 15.5203 14.9687L15.5262 15.1748V20.5167C15.526 20.6098 15.4904 20.6994 15.4265 20.7671C15.3626 20.8348 15.2752 20.8755 15.1823 20.881C15.0894 20.8864 14.9979 20.8562 14.9265 20.7964C14.8601 20.7409 14.8158 20.6637 14.8011 20.5789L14.7957 20.4887V19.1786V18.2046H13.8217H11.1432H10.1693V19.1786V20.5173C10.169 20.6102 10.1334 20.6995 10.0696 20.7671C10.0057 20.8348 9.91836 20.8755 9.82543 20.881C9.73249 20.8864 9.64099 20.8562 9.5696 20.7964C9.50324 20.7409 9.45892 20.6637 9.44417 20.5789L9.43878 20.4887V15.1609C9.43878 14.3537 9.75945 13.5795 10.3303 13.0087C10.9011 12.4379 11.6752 12.1172 12.4825 12.1172ZM20.537 16.2268C20.844 16.1388 21.1655 16.1137 21.4824 16.1529L21.6969 16.1886L22.831 16.3776V15.2279V12.4826C22.831 12.4826 22.831 12.4825 22.831 12.4825C22.831 12.3931 22.8639 12.3068 22.9233 12.24C22.9785 12.1779 23.053 12.1367 23.1345 12.1227L23.2161 12.1178C23.2984 12.1223 23.3769 12.1546 23.4388 12.2095L24.086 11.4817L23.4388 12.2095C23.5008 12.2647 23.5421 12.3393 23.556 12.4207L23.5615 12.5116V20.5177C23.5615 20.5177 23.5615 20.5178 23.5615 20.5178C23.5614 20.6072 23.5286 20.6935 23.4692 20.7604L24.197 21.4076L23.4692 20.7604C23.414 20.8224 23.3395 20.8637 23.258 20.8776L23.1671 20.8831H21.1884C20.8638 20.8827 20.5427 20.8158 20.245 20.6865C19.9472 20.5571 19.6792 20.3681 19.4574 20.131C19.2356 19.894 19.0648 19.614 18.9555 19.3083C18.8462 19.0026 18.8008 18.6778 18.822 18.3539C18.8432 18.03 18.9306 17.7138 19.0788 17.425C19.227 17.1362 19.4329 16.8809 19.6837 16.6748C19.9345 16.4687 20.2249 16.3162 20.537 16.2268ZM3.59595 26.7259L4.27373 26.0481L3.59595 26.7259C4.53207 27.662 5.80171 28.1879 7.12558 28.1879H25.8747C27.1986 28.1879 28.4682 27.662 29.4043 26.7259C30.3404 25.7898 30.8663 24.5201 30.8663 23.1963V9.80404C30.8663 8.48018 30.3404 7.21053 29.4043 6.27442C28.4682 5.3383 27.1986 4.8124 25.8747 4.8124H7.12558C5.80171 4.8124 4.53206 5.3383 3.59595 6.27442C2.65983 7.21053 2.13393 8.48018 2.13393 9.80404V23.1963C2.13393 24.5201 2.65983 25.7898 3.59595 26.7259ZM12.4825 12.8477H12.4823C11.9158 12.8478 11.3689 13.0558 10.9455 13.4323L11.5927 14.1602L10.9455 13.4323C10.5221 13.8088 10.2516 14.3276 10.1853 14.8903L10.182 14.9181L10.1804 14.9461L10.171 15.1028L10.1693 15.1318V15.1609V16.5002V17.4741H11.1432H13.8217H14.7957V16.5002V15.1609C14.7957 14.5474 14.552 13.9591 14.1181 13.5253C13.6843 13.0914 13.096 12.8477 12.4825 12.8477ZM21.481 16.8877L21.3942 16.8799L21.2737 16.8692L21.2315 16.8655L21.1892 16.8654C20.7785 16.8646 20.3824 17.0177 20.0788 17.2944L20.735 18.0142L20.0788 17.2944C19.7753 17.5711 19.5864 17.9514 19.5493 18.3605C19.5122 18.7695 19.6296 19.1776 19.8783 19.5045C20.1271 19.8313 20.4892 20.0531 20.8934 20.1263L20.9367 20.1341L20.9806 20.138L21.1012 20.1488L21.1442 20.1526H21.1874H21.857H22.831V19.1786V18.509V18.4658L22.8272 18.4227L22.8165 18.3022L22.8125 18.2576L22.8045 18.2136C22.7532 17.933 22.6299 17.6707 22.4467 17.4523C22.2634 17.2338 22.0265 17.0668 21.7591 16.9677L21.719 16.9528L21.6776 16.9415L21.5652 16.9107L21.481 16.8877Z"
      fill="white"
      stroke="#092E46"
      strokeWidth="1.94796"
    />
  </svg>
);

const AdIcon = withIcon(Icon);

AdIcon.displayName = "AdIcon";
export default AdIcon;
