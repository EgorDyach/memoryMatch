import { ReactNode } from "react";

export type ModalType =
  | "ConfirmationModal"
  | "InformationModal"
  | "FailureModal";

export type OpenModal = {
  visible: boolean;
  title: ReactNode;
  hideModal: VoidFunction;
  description?: ReactNode;
  isMarkup: boolean;
  withCancel?: boolean;
};

export type ShowModal = Omit<OpenModal, "visible">;

export type CloseModal = {
  visible: boolean;
};

export type ModalEvent = CustomEvent<OpenModal | CloseModal>;

export const MODAL_EVENT_NAME = "modalWindow";
