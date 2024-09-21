import React from 'react'
import { BookPageContainer } from './BookPage.styled';
import BookOverview from '../../components/BookPage/BookOverview/BookOverview';
import BookDescription from '../../components/BookPage/BookDescription/BookDescription';

const BookPage = () => {
  return (
    <BookPageContainer>
      <BookDescription />
      <BookOverview title={"The Hate U Give"} numberOfPages={561} rating={4.69} publishYear={2018} isFinished={true}/>
    </BookPageContainer>
  )
}

export default BookPage