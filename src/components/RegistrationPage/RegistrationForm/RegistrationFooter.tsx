import React from 'react';
import {
    FooterContainer,
    MainFooterText,
    SecondaryFooterText
} from './styles/RegistrationFooter.styled';

const Footer = () => {
    return (
        <FooterContainer data-testid={'cont'}>
            <MainFooterText data-testid={'text'}>LB: Brotherhood of Reader</MainFooterText>
            <SecondaryFooterText data-testid={'text2'}>
                Build your library, share your thoughts, and join a community of book lovers.
            </SecondaryFooterText>
        </FooterContainer>
    );
};

export default Footer;
