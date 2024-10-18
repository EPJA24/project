import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookStatisticBlock from '../components/BookPage/BookOverview/BookStatisticBlock';

describe('Page', () => {
    it('renders a BookStatisticBlock component', () => {
        render(<BookStatisticBlock title={''} value={0} />);

        const block = screen.getByTestId('block');
        const title = screen.getByTestId('title');
        const value = screen.getByTestId('value');

        expect(block).toBeInTheDocument();
        expect(value).toBeInTheDocument();
        expect(title).toBeInTheDocument();
    });
});
