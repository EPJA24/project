import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LogoAndTitle } from "./logo";
import { BookList } from "./bookList";
import  SearchBook  from "./SearchBook";
import AddBook from "./AddBoook";
import { MainContainer, LeftSection, RightSection } from './styles/MainPage';

const MainPage = () => {
    const [books, setBooks] = useState([]); 
    const [initialBooks, setInitialBooks] = useState([]);

    useEffect(() => {
        const fetchInitialBooks = async () => {
            try {
                const response = await axios.get('https://www.backendus.com/books/', {
                    withCredentials: true,
                });
                setInitialBooks(response.data); 
                console.log('Fetched books:', response.data);
                setBooks(response.data); 
            } catch (error) {
                console.error('Error fetching initial books:', error);
            }
        };

        fetchInitialBooks();
    }, []);
    return (
        <MainContainer>
            <LeftSection>
                <SearchBook setBooks={setBooks} initialBooks={initialBooks} />
                <AddBook />
                <BookList initialBooks={books} />
            </LeftSection>
            <RightSection>
                <LogoAndTitle />
            </RightSection>
        </MainContainer>
    );
};

export default MainPage;