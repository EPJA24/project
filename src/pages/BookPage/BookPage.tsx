import React from "react";
import { BookPageContainer } from "./BookPage.styled";
import BookOverview from "../../components/BookPage/BookOverview/BookOverview";
import BookDescription from "../../components/BookPage/BookDescription/BookDescription";

const BookPage = () => {
  return (
    <BookPageContainer>
      <BookDescription />
      <BookOverview />
    </BookPageContainer>
  );
};

export default BookPage;
