import React from 'react';
import {LogOut, LogoContainer, Logo, VerticalLine, LogoText   } from './styles/logo';
import logo from '../../assets/logo.png';


export const LogoAndTitle = () => {
    return (
        <div>
            <LogoContainer>
                <Logo src={logo} alt="Логотип" />
                <VerticalLine />
                <LogoText>For your books</LogoText>
            </LogoContainer>
            <LogOut> LOG OUT </LogOut>
        </div>)
}