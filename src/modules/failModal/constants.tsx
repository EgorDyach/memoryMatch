import { ShowModal } from "@components/Modal/types";
import { FailedModal as Description } from "./FailedModal";
export const FailedModal: (
  onExit: VoidFunction,
  onRestart: VoidFunction
) => ShowModal = (onExit, onRestart) => ({
  title: "levelFailed",
  hideModal: () => {},
  isMarkup: false,
  withCancel: false,
  description: <Description onExit={onExit} onRestart={onRestart} />,
});
