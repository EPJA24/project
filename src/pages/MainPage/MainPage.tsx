import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LogoAndTitle } from './logo';
import { BookList } from './bookList';
import Welcome from './Welcome';
import SearchBook from './SearchBook';
import { MainContainer, LeftSection, RightSection, CoolButton, MenuIcon } from './styles/MainPage';
import AuthCheck from '../../utils/AuthCheck';

const MainPage = () => {
    const [books, setBooks] = useState([]);
    const [initialBooks, setInitialBooks] = useState([]);
    const [BurgerMenu, setBurgerMenu] = useState(false);

    useEffect(() => {
        const fetchInitialBooks = async () => {
            try {
                const response = await axios.get('https://www.backendus.com/books/', {
                    withCredentials: true
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

    const toggleMobileMenu = () => {
        setBurgerMenu(!BurgerMenu);
    };

    return (
        <AuthCheck>
            <MainContainer>
                <LeftSection BurgerMenu={BurgerMenu}>
                    <Welcome />
                    <SearchBook setBooks={setBooks} initialBooks={initialBooks} />
                    <BookList initialBooks={books} />
                </LeftSection>
                <RightSection BurgerMenu={BurgerMenu}>
                    <LogoAndTitle />
                </RightSection>
                <CoolButton onClick={toggleMobileMenu}>
                    <MenuIcon isOpen={BurgerMenu}>
                        <span />
                        <span />
                        <span />
                    </MenuIcon>
                </CoolButton>
            </MainContainer>
        </AuthCheck>
    );
};

export default MainPage;
