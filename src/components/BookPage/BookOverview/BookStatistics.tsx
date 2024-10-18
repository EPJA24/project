import React from 'react';
import { BookStatisticsContainer } from './styles/BookStatistics.styled';
import BookStatisticBlock from './BookStatisticBlock';

interface BookStatisticsProps {
    numberOfPages: number;
    rating: number;
    publishYear: number;
}

const BookStatistics = ({ numberOfPages, rating, publishYear }: BookStatisticsProps) => {
    return (
        <BookStatisticsContainer data-testid={'cont'}>
            <BookStatisticBlock title="Number of pages" value={numberOfPages} />
            <BookStatisticBlock title="Rating" value={rating} />
            <BookStatisticBlock title="Publish year" value={publishYear} />
        </BookStatisticsContainer>
    );
};

export default BookStatistics;
