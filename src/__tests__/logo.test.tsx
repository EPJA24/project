import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LogoAndTitle } from '../pages/AddPage/logo';
import { MemoryRouter } from 'react-router-dom';

describe('Page', () => {
    it('renders a logo component', () => {
        render(
            <MemoryRouter>
                <LogoAndTitle />
            </MemoryRouter>
        );

        const logocont = screen.getByTestId('logocont');
        const beauttext = screen.getByTestId('beauttext');
        const button = screen.getByTestId('button');

        expect(logocont).toBeInTheDocument();
        expect(beauttext).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });
});
