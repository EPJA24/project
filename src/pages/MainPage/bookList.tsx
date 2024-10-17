import React, { useState, useEffect } from "react";
import {
  Cover,
  Container,
  BookName,
  BookDescription,
  Wrapper,
  FullDescription,
  ReadMoreButton,
} from './styles/bookList';
import { useNavigate } from "react-router-dom";

export const BookList = ({ initialBooks }) => {
  const [expandedBookId, setExpandedBookId] = useState(null);
  const [books, setBooks] = useState(initialBooks || []);
  const navigate = useNavigate();

  useEffect(() => {
    setBooks(initialBooks);
  }, [initialBooks]);

  const toggleReadMore = (bookId, event) => {
    event.stopPropagation();
    setExpandedBookId(expandedBookId === bookId ? null : bookId);
  };

  const handleBookClick = (bookId) => {
    navigate(`${bookId}`);
  };

  return (
    <Wrapper>
      {books.map((book) => (
        <Container key={book.id} onClick={() => handleBookClick(book.id)}>
          <Cover src={book.cover_url} alt="cover" />
          <div>
            <BookName>{book.title}</BookName>
            {expandedBookId === book.id ? (
              <>
                <FullDescription dangerouslySetInnerHTML={{ __html: book.description }} />
                <ReadMoreButton onClick={(event) => toggleReadMore(book.id, event)}>Hide</ReadMoreButton>
              </>
            ) : (
              <>
                <BookDescription dangerouslySetInnerHTML={{ __html: book.description }} />
                <ReadMoreButton onClick={(event) => toggleReadMore(book.id, event)}>Read more...</ReadMoreButton>
              </>
            )}
          </div>
        </Container>
      ))}
    </Wrapper>
  );
};