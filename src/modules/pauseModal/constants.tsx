import { ShowModal } from "@components/Modal/types";
import { PauseModal as Description } from "./PauseModal";
import { langType } from "@store/ui/types";
import { language } from "@constants/language";
export const pauseModal: (
  onExit: VoidFunction,
  onCancel: VoidFunction,
  onRestart: VoidFunction,
  lang: langType
) => ShowModal = (onExit, onCancel, onRestart, lang) => ({
  title: language[lang]["modals"]["pause"],
  hideModal: onCancel,
  isMarkup: false,
  withCancel: true,
  description: (
    <Description onExit={onExit} onCancel={onCancel} onRestart={onRestart} />
  ),
});
