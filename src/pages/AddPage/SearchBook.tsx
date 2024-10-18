import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2vw;
    width: 100%;
    margin-bottom: 10px;
`;

const SearchWrapper = styled.div`
    display: flex;
    width: 80%;
    border: 0.2vw solid white;
    border-radius: 20px;
    padding-right: 1.5vw;
    padding-left: 1.5vw;
    padding-bottom: 0.5vw;

    @media (max-width: 915px) {
        width: 92%;
        padding-right: 2vw;
        padding-left: 2vw;
        padding-bottom: 1.6vw;
    }
`;

const Input = styled.input`
    flex: 1;
    padding: 0.5vw;
    border: none;
    border-bottom: thin solid white;
    background-color: transparent;
    font-size: 26px;
    color: white;
    outline: none;

    @media (max-width: 915px) {
        font-size: 15px;
        padding: 1.5vw;
    }
`;

const SearchButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 1.4vw;

    @media (max-width: 915px) {
        font-size: 3vw;
    }
`;

const SearchBook = ({ setBooks }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async () => {
        if (!searchTerm) return;

        try {
            const response = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
            );
            const books = response.data.items.map((item) => ({
                id: item.id,
                title: item.volumeInfo.title,
                description: item.volumeInfo.description,
                cover_url: item.volumeInfo.imageLinks?.thumbnail || '/default_cover.jpg'
            }));
            setBooks(books);
            setSearchTerm('');
        } catch (error) {
            console.error('Error searching for books:', error);
        }
    };

    return (
        <SearchContainer>
            <SearchWrapper data-testid={"wrap"}>
                <Input data-testid={"input"}
                    type="text"
                    placeholder="Enter the title of the book to search here"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <SearchButton data-testid={"button"} onClick={handleSearch}>🔍</SearchButton>
            </SearchWrapper>
        </SearchContainer>
    );
};

export default SearchBook;
