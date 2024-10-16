import React, { useState, useEffect } from "react";
import {
  Cover,
  Container,
  BookName,
  BookDescription,
  Wrapper,
  FullDescription,
  ReadMoreButton,
} from "./styles/bookList";
import { useNavigate } from "react-router-dom";

export const BookList = ({ initialBooks }) => {
  const [expandedBookId, setExpandedBookId] = useState(null);
  const [books, setBooks] = useState(initialBooks || []);
  const navigate = useNavigate();

  useEffect(() => {
    setBooks(initialBooks);
  }, [initialBooks]);

  const toggleReadMore = (bookId) => {
    setExpandedBookId(expandedBookId === bookId ? null : bookId);
  };

  return (
    <Wrapper>
      {books.map((book) => (
        <Container
          key={book.id}
          onClick={() => navigate(`/lb-team/mybook/${book.id}`)}
        >
          <Cover src={book.cover_url} alt="cover" />
          <div>
            <BookName>{book.title}</BookName>
            {expandedBookId === book.id ? (
              <>
                <FullDescription
                  dangerouslySetInnerHTML={{ __html: book.description }}
                />
                <ReadMoreButton onClick={() => toggleReadMore(book.id)}>
                  Скрыть
                </ReadMoreButton>
              </>
            ) : (
              <>
                <BookDescription
                  dangerouslySetInnerHTML={{ __html: book.description }}
                />
                <ReadMoreButton onClick={() => toggleReadMore(book.id)}>
                  Читать далее...
                </ReadMoreButton>
              </>
            )}
          </div>
        </Container>
      ))}
    </Wrapper>
  );
};
