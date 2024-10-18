import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookOverview from '../components/BookPage/BookOverview/BookOverview';


describe('Page', () => {
    it('renders an Overview component', () => {
        render(
            <BookOverview
                bookName={""}
                imageSrc={""}
                isFinished={true}
                numberOfPages={1}
                publishYear={1}
                rating={1}/>
        );

        const bookoverview = screen.getByTestId('bookovercont');
        const img = screen.getByTestId('imgcont');
        const title = screen.getByTestId('booktitle');
        const controls = screen.getByTestId('controls');

        expect(bookoverview).toBeInTheDocument();
        expect(img).toBeInTheDocument();
        expect(title).toBeInTheDocument();
        expect(controls).toBeInTheDocument();

    })})