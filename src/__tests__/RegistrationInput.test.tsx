import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RegistrationInput from "../components/RegistrationPage/RegistrationForm/RegistrationInput";
import { MemoryRouter } from 'react-router-dom';

describe('Page', () => {
    it('renders a RegistrationInput component', () => {
        render(
            <MemoryRouter>
            <RegistrationInput />,
            </MemoryRouter>
        );

        const cont = screen.getByTestId('inputcont');
        const cont2 = screen.getByTestId('inputcont2');
        const button = screen.getByTestId('buttoncont');

        expect(cont).toBeInTheDocument();
        expect(cont2).toBeInTheDocument();
        expect(button).toBeInTheDocument();

    })})