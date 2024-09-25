import React from 'react';
import {LogoContainer, Logo, VerticalLine, LogoText, TextContainer, Title } from './styles/RegistrationLogo.styled'
import logo from '../../../assets/logo.png';

const LogoAndTitle = () => {
    return (
        <>
        <LogoContainer>
            <Logo src={logo} alt="Логотип" />
            <VerticalLine />
            <LogoText>For your books</LogoText>
        </LogoContainer><TextContainer>
                <Title>Welcome, login to your account</Title>
            </TextContainer>
        </>
    );
  };
  
  export default LogoAndTitle;