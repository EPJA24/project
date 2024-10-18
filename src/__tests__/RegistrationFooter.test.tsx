import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RegistrationFooter from "../components/RegistrationPage/RegistrationForm/RegistrationFooter";

describe('Page', () => {
    it('renders a RegistrationFooter component', () => {
        render(
                <RegistrationFooter/>,
        );

        const container = screen.getByTestId('cont');
        const text = screen.getByTestId('text');
        const text2 = screen.getByTestId('text2');

        expect(container).toBeInTheDocument();
        expect(text).toBeInTheDocument();
        expect(text2).toBeInTheDocument();

    })})