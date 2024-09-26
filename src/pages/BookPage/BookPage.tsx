import React from 'react'
import { BookDescription, BookPageContainer } from './BookPage.styled';
import BookOverview from '../../components/BookPage/BookOverview/BookOverview';

const BookPage = () => {
  return (
    <BookPageContainer>
      <BookDescription />
      <BookOverview imageSrc={undefined} title={"The Hate U Give"}/>
    </BookPageContainer>
  )
}

export default BookPage