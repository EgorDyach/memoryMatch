import { FC, useEffect, useState } from "react";
import Portal from "@components/Portal";
import { useEffectOnce } from "@hooks/useEffectOnce";
import { Backdrop } from "./ModalStyles";
import { MODAL_EVENT_NAME, ModalEvent, OpenModal } from "./types";
import { ModalView } from "./ModalView";

export const Modal: FC = () => {
  const [content, setContent] = useState<OpenModal | null>(null);

  useEffectOnce(() => {
    const emitterNode = window?.document?.body;
    if (!emitterNode) return;

    const showModalHandler: EventListener = (e) => {
      const detail = (e as ModalEvent).detail;
      if (detail.visible) setContent(detail as OpenModal);
      else setContent(null);
    };
    emitterNode.addEventListener(MODAL_EVENT_NAME, showModalHandler);

    return () => {
      emitterNode.removeEventListener(MODAL_EVENT_NAME, showModalHandler);
      setContent(null);
    };
  });

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && content?.visible === true) {
        setContent(null);
      }
    };
    document.body.style.overflow = content?.visible ? "hidden" : "unset";
    document.addEventListener("keydown", onKeyDown, false);
    return () => {
      document.removeEventListener("keydown", onKeyDown, false);
    };
  }, [content]);

  return (
    <>
      <Portal elementId="overlay">
        <Backdrop
          $visible={content?.visible}
          onClick={() => content?.hideModal()}
        />
        <ModalView
          title={content?.title}
          description={content?.description}
          visible={content?.visible}
          hideModal={content?.hideModal}
          isMarkup={content?.isMarkup}
        />
      </Portal>
    </>
  );
};
