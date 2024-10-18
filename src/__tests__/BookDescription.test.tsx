import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import BookDescription from "../components/BookPage/BookDescription/BookDescription";

describe('Page', () => {
    it('renders a bookDescription component', () => {
        render(
            <MemoryRouter>
            <BookDescription  description={""}/>,
            </MemoryRouter>
        );

        const container = screen.getByTestId('cont');
        const title = screen.getByTestId('title');
        const desc = screen.getByTestId('desc');
        const button = screen.getByTestId('button')
        const container2 = screen.getByTestId('cont2');

        expect(desc).toBeInTheDocument();
        expect(container).toBeInTheDocument();
        expect(button).toBeInTheDocument();
        expect(container2).toBeInTheDocument();
        expect(title).toBeInTheDocument();

    })})