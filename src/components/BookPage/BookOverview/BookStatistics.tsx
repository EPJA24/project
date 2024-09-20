import React from 'react'
import { BookStatisticsContainer } from './BookStatistics.styled'

interface BookStatisticsProps {
  numberOfPages: number;
  rating: number;
  publishYear: number;
}

const BookStatistics = ({numberOfPages, rating, publishYear}: BookStatisticsProps) => {
  return (
    <BookStatisticsContainer>
      
    </BookStatisticsContainer>
  )
}

export default BookStatistics