import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import {BookList} from "../pages/MainPage/bookList";

describe('Page', () => {
    it('renders a BookList component', () => {
        render(
            <MemoryRouter>
                <BookList initialBooks={[]} />,
            </MemoryRouter>
        );

        const wrapper = screen.getByTestId('wrapper');

        expect(wrapper).toBeInTheDocument();

    })})