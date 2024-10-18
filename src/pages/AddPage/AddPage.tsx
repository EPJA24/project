import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LogoAndTitle } from './logo';
import { BookList } from './bookList';
import Welcome from './Welcome';
import SearchBook from './SearchBook';
import { MainContainer, LeftSection, RightSection, CoolButton, MenuIcon } from './styles/MainPage';
import AuthCheck from '../../utils/AuthCheck';
import { Helmet } from 'react-helmet';

const AddPage = () => {
    const [books, setBooks] = useState([]);
    const [BurgerMenu, setBurgerMenu] = useState(false);

    const toggleMobileMenu = () => {
        setBurgerMenu(!BurgerMenu);
    };

    return (
        <AuthCheck>
            <Helmet>
                <title>Add book</title>
                <meta name="description" content="A page with adding a book to your library" />
            </Helmet>
            <MainContainer>
                <LeftSection BurgerMenu={BurgerMenu}>
                    <Welcome />
                    <SearchBook setBooks={setBooks} />
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

export default AddPage;
