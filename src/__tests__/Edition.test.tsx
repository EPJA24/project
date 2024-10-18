import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Edition from '../components/BookPage/BookDescription/Edition';

const editionMock = {
    title: '123',
    url: undefined,
    imageSrc: undefined
};
describe('Page', () => {
    it('renders a Edition component', () => {
        render(<Edition edition={editionMock} />);

        const container = screen.getByTestId('editcont');
        const img = screen.getByTestId('imgcont');
        const title = screen.getByTestId('edittitle');

        expect(container).toBeInTheDocument();
        expect(img).toBeInTheDocument();
        expect(title).toBeInTheDocument();
    });
});
