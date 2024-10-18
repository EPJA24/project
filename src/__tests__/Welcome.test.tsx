import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Welcome from '../pages/AddPage/Welcome';

describe('Page', () => {
    it('renders a Welcome component', () => {
        render(<Welcome />);

        const welcome = screen.getByTestId('welcome');

        expect(welcome).toBeInTheDocument();
    });
});
