import React from 'react';
import styled from 'styled-components';
import { BookPageContainer, BackgroundContainer } from './RegistrationPage.styled';
import Footer from '../../components/RegistrationPage/RegistrationForm/RegistrationFooter';
import InputAndButtons from '../../components/RegistrationPage/RegistrationForm/RegistrationInput';
import LogoAndTitle from '../../components/RegistrationPage/RegistrationForm/RegistrationLogo';
import RegistrationImage from '../../components/RegistrationPage/RegistrationImage/RegistrationImage';

const RegistrationPage = () => {
    return (
        <BookPageContainer>
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
