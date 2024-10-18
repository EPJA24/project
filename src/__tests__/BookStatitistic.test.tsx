import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookStatistics from '../components/BookPage/BookOverview/BookStatistics';

const PropsMock = {
    numberOfPages: 1,
    rating: 1,
    publishYear: 1
};
describe('Page', () => {
    it('renders a BookStatistic component', () => {
        render(<BookStatistics {...PropsMock} />);

        const cont = screen.getByTestId('cont');

        expect(cont).toBeInTheDocument();
    });
});
