import React, { Children } from "react";
import {
  CloseButton,
  ModalHeaderWrapper,
  ModalTitle as MT,
  ModalWrapper,
  Content,
} from "./Modal.styled";
import {
  ModalProps,
  ModalTriggerProps,
  ModalHeaderProps,
  ModalTitleProps,
  ModalContentProps,
} from "./ModalInterfaces";
import ReactPortal from "../ReactPortal";
import { X } from "lucide-react";

const Modal = ({ children, width, height, modalId }: ModalProps) => {
  return (
    <ReactPortal portalId={modalId}>
      <ModalWrapper $width={width} $height={height}>
        {children}
      </ModalWrapper>
    </ReactPortal>
  );
};

const ModalCloseTrigger = ({ width, ...props }: ModalTriggerProps) => {
  return (
    <CloseButton {...props}>
      <X width={width} />
    </CloseButton>
  );
};

const ModalHeader = ({ children }: ModalHeaderProps) => {
  return <ModalHeaderWrapper>{children}</ModalHeaderWrapper>;
};

const ModalTitle = ({ children }: ModalTitleProps) => {
  return <MT>{children}</MT>;
};

const ModalContent = ({ children }: ModalContentProps) => {
  return <Content>{children}</Content>;
};

export { Modal, ModalCloseTrigger, ModalHeader, ModalTitle, ModalContent };
