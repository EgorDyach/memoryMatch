import { ShowModal } from "@components/Modal/types";
import { WinModal as Description } from "./WinModal";
import { language } from "@constants/language";
export const WinModal: (
  onExit: VoidFunction,
  onRestart: VoidFunction,
  winner: "P1" | "P2"
) => ShowModal = (onExit, onRestart, winner) => ({
  title:
    winner === "P1"
      ? `${language["ru"]["modals"]["player"]} 1 ${language["ru"]["modals"]["win"]}!`
      : `${language["ru"]["modals"]["player"]} 2 ${language["ru"]["modals"]["win"]}!`,
  hideModal: () => {},
  isMarkup: false,
  withCancel: false,
  description: <Description onExit={onExit} onRestart={onRestart} />,
});
