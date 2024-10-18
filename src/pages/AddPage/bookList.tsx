import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Cover,
    Container,
    BookName,
    BookDescription,
    Wrapper,
    FullDescription,
    ReadMoreButton
} from './styles/bookList';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const AddBookButton = styled.button<{ added: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5vw 1.5vw;
    width: auto;
    height: auto;
    font-size: 1vw;
    font-weight: bold;
    font-family: Inter, sans-serif;
    background-color: #333;
    color: white;
    border: 2px solid transparent;
    border-radius: 0.5vw;
    cursor: pointer;
    margin-top: 5px;
    transition:
        background-color 0.1s ease,
        border 0.1s ease,
        transform 0.1s ease;
    margin-bottom: 1vw;

    &:hover {
        background-color: #555;
        border: 2px solid white;
    }

    &:active {
        background-color: #222;
    }

    @media (max-width: 768px) {
        padding: 1vw 2vw;
        font-size: 3vw;
        border-radius: 2vw;
    }
`;

const LoadingIndicator = styled.div`
    color: white;
    font-size: 1.5vw;
    margin-top: 10px;
`;

export const BookList = ({ initialBooks }) => {
    const [expandedBookId, setExpandedBookId] = useState<string | null>(null);
    const [books, setBooks] = useState([]);
    const [addedBooks, setAddedBooks] = useState<{ [key: string]: boolean }>({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (initialBooks) {
            setLoading(true);
            const filteredBooks = initialBooks.filter((book) => !addedBooks[book.id]);
            setBooks(filteredBooks);
            setLoading(false);
        }
    }, [initialBooks, addedBooks]);

    const toggleReadMore = (bookId: string, event: React.MouseEvent) => {
        event.stopPropagation();
        setExpandedBookId(expandedBookId === bookId ? null : bookId);
    };

    const handleAddBook = async (bookId: string) => {
        if (addedBooks[bookId]) return;

        try {
            await axios.post(
                'https://www.backendus.com/books/',
                { google_books_id: bookId },
                {
                    withCredentials: true
                }
            );

            setAddedBooks((prevState) => ({
                ...prevState,
                [bookId]: true
            }));
        } catch (error) {
            console.error('Error adding book:', error);
        }
    };

    if (loading) {
        return <LoadingIndicator>Loading...</LoadingIndicator>;
    }

    return (
        <Wrapper>
            {books.map((book) => (
                <Container key={book.id}>
                    <Cover src={book.cover_url} alt="cover" />
                    <div>
                        <BookName>{book.title}</BookName>
                        {expandedBookId === book.id ? (
                            <>
                                <FullDescription
                                    dangerouslySetInnerHTML={{ __html: book.description }}
                                />
                                <ReadMoreButton onClick={(event) => toggleReadMore(book.id, event)}>
                                    Hide
                                </ReadMoreButton>
                            </>
                        ) : (
                            <>
                                <BookDescription
                                    dangerouslySetInnerHTML={{ __html: book.description }}
                                />
                                <ReadMoreButton onClick={(event) => toggleReadMore(book.id, event)}>
                                    Read more...
                                </ReadMoreButton>
                            </>
                        )}
                        <AddBookButton
                            added={addedBooks[book.id] || false}
                            onClick={(event) => {
                                event.stopPropagation();
                                handleAddBook(book.id);
                            }}
                        >
                            {addedBooks[book.id] ? 'Added' : 'Add Book'}
                        </AddBookButton>
                    </div>
                </Container>
            ))}
        </Wrapper>
    );
};
