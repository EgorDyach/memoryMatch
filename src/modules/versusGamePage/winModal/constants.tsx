import { ShowModal } from "@components/Modal/types";
import { WinModal as Description } from "./WinModal";
export const WinModal: (
  onExit: VoidFunction,
  onRestart: VoidFunction,
  winner: "P1" | "P2"
) => ShowModal = (onExit, onRestart, winner) => ({
  title: winner === "P1" ? "Player 1 win!" : "Player 2 win!",
  hideModal: () => {},
  isMarkup: false,
  withCancel: false,
  description: <Description onExit={onExit} onRestart={onRestart} />,
});
