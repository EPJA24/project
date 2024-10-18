import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookOverview from '../components/BookPage/BookOverview/BookOverview';
import { MemoryRouter } from 'react-router-dom';

describe('Page', () => {
    it('renders an Overview component', () => {
        render(
            <MemoryRouter>
                <BookOverview
                    bookName={''}
                    imageSrc={''}
                    numberOfPages={1}
                    publishYear={1}
                    rating={1}
                />
            </MemoryRouter>
        );

        const bookoverview = screen.getByTestId('bookovercont');
        const img = screen.getByTestId('imgcont');
        const title = screen.getByTestId('booktitle');
        const controls = screen.getByTestId('controls');

        expect(bookoverview).toBeInTheDocument();
        expect(img).toBeInTheDocument();
        expect(title).toBeInTheDocument();
        expect(controls).toBeInTheDocument();
    });
});
