import { background } from "@lib/theme/colors";
import { shadow } from "@lib/theme/shadow";
import styled from "styled-components";

export const StyledModalWrap = styled.div<{ $visible?: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${(props) => (props.$visible ? 1000 : -1)};
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  width: 100%;
  outline: 0;
  height: 100%;
  align-content: center;
  padding: 20px;
  overflow-y: auto;
  transition: ${(props) =>
    props.$visible
      ? "opacity 0.5s ease"
      : "opacity 0.5s ease, z-index .5s ease"};
`;

export const Backdrop = styled.div<{ $visible?: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${background.backdrop};
  z-index: ${(props) => (props.$visible ? 1000 : -1)};
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  transition: ${(props) =>
    props.$visible
      ? "opacity 0.5s ease"
      : "opacity 0.5s ease, z-index .5s ease"};
`;

export const StyledModalContent = styled.div`
  z-index: 100;
  position: relative;
  margin: auto;
  background: ${background.white};
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  background-color: #64697b;
  ${shadow("full")};
  max-width: 460px;
`;
