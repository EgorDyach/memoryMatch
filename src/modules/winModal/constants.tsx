import { ShowModal } from "@components/Modal/types";
import { WinModal as Description } from "./WinModal";
export const WinModal: (
  onExit: VoidFunction,
  onRestart: VoidFunction
) => ShowModal = (onExit, onRestart) => ({
  title: "Level completed",
  hideModal: () => {},
  isMarkup: false,
  withCancel: false,
  description: <Description onExit={onExit} onRestart={onRestart} />,
});
