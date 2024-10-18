import React, { Children } from 'react';
import {
    CloseButton,
    ModalHeaderWrapper,
    ModalTitle as MT,
    ModalWrapper,
    Content
} from './Modal.styled';
import {
    ModalProps,
    ModalTriggerProps,
    ModalHeaderProps,
    ModalTitleProps,
    ModalContentProps
} from './ModalInterfaces';
import ReactPortal from '../ReactPortal';
import { X } from 'lucide-react';

const Modal = ({ children, width, height, modalId }: ModalProps) => {
    return (
        <ReactPortal portalId={modalId}>
            <ModalWrapper data-testid={"modal"}   $width={width} $height={height}>
                {children}
            </ModalWrapper>
        </ReactPortal>
    );
};

const ModalCloseTrigger = ({ width, ...props }: ModalTriggerProps) => {
    return (
        <CloseButton  data-testid={"modaltrigger"}  {...props}>
            <X width={width} />
        </CloseButton>
    );
};

const ModalHeader = ({ children }: ModalHeaderProps) => {
    return <ModalHeaderWrapper data-testid={"modalheader"}>{children}</ModalHeaderWrapper>;
};

const ModalTitle = ({ children }: ModalTitleProps) => {
    return <MT data-testid={"modaltitle"}>{children}</MT>;
};

const ModalContent = ({ children }: ModalContentProps) => {
    return <Content data-testid={"modalcontent"} >{children}</Content>;
};

export { Modal, ModalCloseTrigger, ModalHeader, ModalTitle, ModalContent };
