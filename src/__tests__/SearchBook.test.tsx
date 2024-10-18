import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBook from "../pages/AddPage/SearchBook";

describe('Page', () => {
    it('renders a SearchBook component', () => {
        render(
            <SearchBook setBooks={undefined} />
        );

        const wrap = screen.getByTestId('wrap');
        const input = screen.getByTestId('input');
        const button = screen.getByTestId('button');

        expect(wrap).toBeInTheDocument();
        expect(input).toBeInTheDocument();
        expect(button).toBeInTheDocument();

    })})