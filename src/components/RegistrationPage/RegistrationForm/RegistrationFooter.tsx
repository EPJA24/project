import React from 'react';
import {FooterContainer, MainFooterText, SecondaryFooterText} from './styles/RegistrationFooter.styled'

const Footer = () => {
    return (
      <FooterContainer>
        <MainFooterText>LB: Brotherhood of Reader</MainFooterText>
        <SecondaryFooterText>
          Build your library, share your thoughts, and join a community of book lovers.
        </SecondaryFooterText>
      </FooterContainer>
    );
  };
  
  export default Footer;