import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import BookDescription from "../components/BookPage/BookDescription/BookDescription";

describe('Page', () => {
    it('renders a bookDescription page', () => {
        render(
            <MemoryRouter>
            <BookDescription  description={""}/>,
            </MemoryRouter>
        );

        const container = screen.getByTestId('cont');
        const desc = screen.getByText('Short description');
        const button = screen.getByText('Start reading')
        const container2 = screen.getByTestId('cont2');
        const other = screen.getByText('Other editions');
        const editlist  =screen.getByTestId('editlist');

        expect(desc).toBeInTheDocument();
        expect(container).toBeInTheDocument();
        expect(button).toBeInTheDocument();
        expect(container2).toBeInTheDocument();
        expect(other).toBeInTheDocument();
        expect(editlist).toBeInTheDocument();

    })})