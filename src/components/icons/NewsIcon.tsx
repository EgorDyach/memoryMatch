import { FC, SVGProps } from "react";
import withIcon from "@hocs/withIcon";

const Icon: FC = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 30 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.4701 5.3763H22.6639C22.4664 4.56075 22.0479 3.80749 21.4448 3.20436C20.5815 2.34106 19.4106 1.85606 18.1897 1.85606H5.86887C4.64798 1.85606 3.47709 2.34106 2.61378 3.20436C1.75048 4.06766 1.26548 5.23855 1.26548 6.45945V17.9002C1.26548 19.3545 1.8432 20.7493 2.87155 21.7776C3.89989 22.806 5.29463 23.3837 6.74893 23.3837H22.59C24.0443 23.3837 25.439 22.806 26.4674 21.7776C27.4957 20.7493 28.0735 19.3545 28.0735 17.9002V9.97969C28.0735 8.75879 27.5885 7.5879 26.7252 6.7246L25.9876 7.46213L26.7252 6.7246C25.8618 5.8613 24.691 5.3763 23.4701 5.3763Z"
      fill="white"
      stroke="#092E46"
      stroke-width="2.1663"
    />
  </svg>
);

const NewsIcon = withIcon(Icon);

NewsIcon.displayName = "NewsIcon";
export default NewsIcon;
