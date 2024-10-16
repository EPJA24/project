import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddPage from '../pages/AddPage/AddPage'
import  { MainContainer, LeftSection, RightSection } from "../components/AddPage/styles/MainPage";
import {InputField} from "../components/AddPage/InputField";

describe('Page', () => {
    it('renders a user info', () => {
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