import { StyledButton } from "@modules/rootPage/rootStyles";
import { StyledButtonShadow } from "@modules/rootPage/rootStyles";
import { uiActions, uiSelectors } from "@store/ui";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const MyButton = styled(StyledButtonShadow)<{ $opacity: boolean }>`
  opacity: ${(props) => (props.$opacity ? 1 : 0)};
  z-index: ${(props) => (props.$opacity ? "unset" : -1)};
  transition: opacity 0.3s ease;
`;

export const LoaderButton = () => {
  const requests = useSelector(uiSelectors.getRequests);
  const dispatch = useDispatch();
  const handlePlay = () => {
    dispatch(uiActions.setLoader(false));
    document.body.style.overflow = "scroll";
  };
  return (
    <MyButton
      $opacity={
        Object.values(requests).filter((el) => el === "fetched").length ===
        Object.values(requests).length
      }
    >
      <StyledButton onClick={handlePlay} padding="24px 100px" type="pink">
        <div>
          <div>PLAY</div>
        </div>
      </StyledButton>
    </MyButton>
  );
};
