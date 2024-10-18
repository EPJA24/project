import React from 'react';
import styled from 'styled-components';
import { BookPageContainer, BackgroundContainer } from './RegistrationPage.styled';
import Footer from '../../components/RegistrationPage/RegistrationForm/RegistrationFooter';
import InputAndButtons from '../../components/RegistrationPage/RegistrationForm/RegistrationInput';
import LogoAndTitle from '../../components/RegistrationPage/RegistrationForm/RegistrationLogo';
import RegistrationImage from '../../components/RegistrationPage/RegistrationImage/RegistrationImage';
import { Helmet } from 'react-helmet';

const RegistrationPage = () => {
    return (
        <BookPageContainer>
            <Helmet>
                <title>Login</title>
                <meta name="description" content="Authorization and registration page" />
            </Helmet>
            <RegistrationImage />
            <BackgroundContainer>
                <LogoAndTitle />
                <InputAndButtons />
                <Footer />
            </BackgroundContainer>
        </BookPageContainer>
    );
};

export default RegistrationPage;
