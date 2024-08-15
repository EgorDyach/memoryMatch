import { ProgressBar } from "@components/ProgressBar";
import { textShadow } from "@lib/theme/shadow";
import { uiSelectors } from "@store/ui";
import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledProgressBar = styled(ProgressBar)<{
  $opacity: boolean;
  $amount: number;
}>`
  position: fixed;
  bottom: 0;
  overflow: visible;
  opacity: ${(props) => (props.$opacity ? 1 : 0)};
  transition: opacity 0.3s ease;
  &::after {
    content: "${(props) => props.$amount}%";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    ${textShadow("#B7134D", 2, 3)};
    font-size: 40px;
  }
`;

export const LoadedProgressBar = () => {
  const requests = useSelector(uiSelectors.getRequests);
  return (
    <StyledProgressBar
      $opacity={
        Object.values(requests).filter((el) => el === "fetched").length !==
        Object.values(requests).length
      }
      active={Object.values(requests).filter((el) => el === "fetched").length}
      $amount={Math.ceil(
        (Object.values(requests).filter((el) => el === "fetched").length /
          Object.values(requests).length) *
          100
      )}
      total={Object.values(requests).length}
      color1="#FB0059"
      color2="#890E3A"
      bgColor="#440A1F"
      height={33}
      itemWidth={60}
      speed={0.8}
    />
  );
};
