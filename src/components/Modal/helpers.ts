import { ReactNode } from "react";

export interface ModalViewProps {
  title: ReactNode;
  hideModal?: () => void;
  description: ReactNode;
  visible?: boolean;
  isMarkup?: boolean;
}
