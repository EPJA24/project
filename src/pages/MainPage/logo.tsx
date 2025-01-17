import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ButtonAction,
    LogoContainer,
    Logo,
    VerticalLine,
    LogoText,
    BeautifulText
} from './styles/logo';
import logo from '../../assets/logo.png';
import Cookies from 'js-cookie';

export const LogoAndTitle = () => {
    const navigate = useNavigate();

    const handleAddBookClick = () => {
        navigate('addbook');
    };

    const handleLogout = () => {
        Cookies.remove('access_token');
        Cookies.set('is_auth', false);
        navigate('/lb-team/registration');
    };

    return (
        <div>
            <LogoContainer>
                <Logo src={logo} alt="Логотип" />
                <VerticalLine />
                <LogoText>For your books</LogoText>
            </LogoContainer>
            <BeautifulText>
                "Books are the quietest and most constant of friends; they are the most accessible
                and wisest of counselors, and the most patient of teachers." — Charles W. Eliot
            </BeautifulText>
            <ButtonAction onClick={handleAddBookClick}>ADD BOOK📕</ButtonAction>
            <ButtonAction onClick={handleLogout}>LOG OUT</ButtonAction>
        </div>
    );
};
