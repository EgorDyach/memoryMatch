import { StyledButton } from "@modules/rootPage/rootStyles";
import { StyledButtonShadow } from "@modules/rootPage/rootStyles";
import { uiSelectors } from "@store/ui";
import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const MyButton = styled(StyledButtonShadow)<{ $opacity: boolean }>`
  opacity: ${(props) => (props.$opacity ? 1 : 0)};
  z-index: ${(props) => (props.$opacity ? "unset" : -1)};
  transition: opacity 0.3s ease;
`;

interface LoaderButtonProps {
  handleClick: VoidFunction;
}

export const LoaderButton: FC<LoaderButtonProps> = ({ handleClick }) => {
  const requests = useSelector(uiSelectors.getRequests);

  return (
    <MyButton
      $opacity={
        Object.values(requests).filter((el) => el === "fetched").length ===
        Object.values(requests).length
      }
    >
      <StyledButton onClick={handleClick} padding="24px 100px" type="pink">
        <div>
          <div>PLAY</div>
        </div>
      </StyledButton>
    </MyButton>
  );
};