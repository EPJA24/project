import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
    Modal,
    ModalCloseTrigger,
    ModalContent,
    ModalHeader,
    ModalTitle
} from '../components/Modal/Modal';

describe('Modal', () => {
    it('renders a Modal component', () => {
        render(<Modal children={''} modalId={''} />);

        const modal = screen.getByTestId('modal');

        expect(modal).toBeInTheDocument();
    });
});

describe('ModalCloseTrigger', () => {
    it('renders a ModalCloseTrigger component', () => {
        render(<ModalCloseTrigger />);

        const modaltrigger = screen.getByTestId('modaltrigger');

        expect(modaltrigger).toBeInTheDocument();
    });
});

describe('ModalContent', () => {
    it('renders a ModalContent component', () => {
        render(<ModalContent children={''} />);

        const modelContent = screen.getByTestId('modalcontent');

        expect(modelContent).toBeInTheDocument();
    });
});

describe('ModalHeader', () => {
    it('renders a ModalHeader component', () => {
        render(<ModalHeader children={''} />);

        const modalHeader = screen.getByTestId('modalheader');

        expect(modalHeader).toBeInTheDocument();
    });
});

describe('ModalTitle', () => {
    it('renders a ModalTitle component', () => {
        render(<ModalTitle children={''} />);

        const modalTitle = screen.getByTestId('modaltitle');

        expect(modalTitle).toBeInTheDocument();
    });
});
