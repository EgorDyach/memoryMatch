import { ShowModal } from "@components/Modal/types";
import { PauseModal as Description } from "./PauseModal";
export const pauseModal: (
  onExit: VoidFunction,
  onCancel: VoidFunction,
  onRestart: VoidFunction
) => ShowModal = (onExit, onCancel, onRestart) => ({
  title: "pause",
  hideModal: onCancel,
  isMarkup: false,
  withCancel: true,
  description: (
    <Description onExit={onExit} onCancel={onCancel} onRestart={onRestart} />
  ),
});
