import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

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
    border:  0.2vw solid white;
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

const SearchBook = ({ setBooks, initialBooks }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = async () => {
        if (!searchTerm) {
            setBooks(initialBooks); 
            return;
        }
        try {
            const response = await axios.get('https://www.backendus.com/books/users_book/search', {
                params: { title: searchTerm }, 
                withCredentials: true, 
            });
            setBooks(response.data); 
            setSearchTerm(""); 
        } catch (error) {
            console.error("Error searching for books:", error);
            setBooks(initialBooks);
        }
    };

    return (
        <SearchContainer>
            <SearchWrapper>
                <Input type="text"  placeholder="Write book name"  value={searchTerm}  onChange={(e) => setSearchTerm(e.target.value)}  />
                <SearchButton onClick={handleSearch}>🔍</SearchButton>
            </SearchWrapper>
        </SearchContainer>
    );
};

export default SearchBook;
