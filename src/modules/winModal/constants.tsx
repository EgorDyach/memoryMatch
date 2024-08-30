import { ShowModal } from "@components/Modal/types";
import { WinModal as Description } from "./WinModal";
export const WinModal: (
  onExit: VoidFunction,
  onNext: VoidFunction,
  gameLevelId: number
) => ShowModal = (onExit, onNext, gameLevelId) => ({
  title: "Level completed",
  hideModal: () => {},
  isMarkup: false,
  withCancel: false,
  description: (
    <Description onExit={onExit} onNext={onNext} gameLevelId={gameLevelId} />
  ),
});
