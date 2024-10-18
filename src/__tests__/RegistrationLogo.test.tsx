import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RegistrationLogo from "../components/RegistrationPage/RegistrationForm/RegistrationLogo";

describe('Page', () => {
    it('renders a RegistrationLogo component', () => {
        render(
            <RegistrationLogo/>,
        );

        const logo = screen.getByTestId('logocont');
        const text = screen.getByTestId('textcont');

        expect(logo).toBeInTheDocument();
        expect(text).toBeInTheDocument();

    })})