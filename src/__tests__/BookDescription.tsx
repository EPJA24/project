import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddPage from '../pages/AddPage/AddPage'
import '../components/BookPage/BookDescription/BookDescription.tsx';

describe('Page', () => {
    it('renders a bookDescription page', () => {
        render(
            <AddPage />,
        );

        const main = screen.getByTestId('maincontainer');
        const left = screen.getByTestId('leftsection')
        const input = screen.getByText('Please, write a name of book');
        expect(main).toBeInTheDocument();
        expect(left).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    })})