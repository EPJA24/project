import React from 'react';
import styled from 'styled-components';
import { BookPageContainer } from './RegistrationPage.styled';
import image from '../../assets/reg_back_1.png';
import logo from '../../assets/logo.png';


const ImageContainer = styled.div`
  display: flex;
  width: 60%;
  background-image: url(${image}); 
  background-repeat: no-repeat;
  @media (max-width: 1200px) {
   width: 40%;
   display: table;
   height: 40%;
  }
`;

const BackgroundContainer = styled.div`
  background-color: black;
  flex-grow: 1;
  display: flex; 
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin-top: 20%;
`;

const LogoContainer = styled.div`
  display: flex;
  margin-left: 20px;
  margin-top: 32px;
  align-items: center; 
`;

const Logo = styled.img`
  weight: auto;
  @media (max-width: 768px) {
    weight: 32px;
    height: 32px;
  }
`;

const Title = styled.h1`
    font-size: 2rem;
    margin-left: 43px;
`;


const VerticalLine = styled.div`
  width: 2px; 
  height: 30px; 
  background-color: white; 
  margin: 0 10px; 
  @media (max-width: 768px) {
    height: 25px;
  }
`;

const LogoText = styled.span`
  color: white;
  font-size: 30px;
  font-weight: extra-light;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const InputContainerCont = styled.div`
  margin-top: 50px;
`;

const InputContainer = styled.div`
  margin-top: 2vh;
  width: 80%;
  display: flex; 
  flex-direction: column; 
  align-items: center;
  margin-left: auto; 
  margin-right: auto; 
`;

const Label = styled.label`
  color: white;
  font-size: 19px;
  margin-bottom: 8px;
  display: block;
  align-items: center;
  width: 100%;
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 20px;
  border: none;
  background-color: #464646;
  margin-bottom: 20px;
  font-size: 1rem;
  align-items: center;
  color: white;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 20px auto 0;
`;

const Button = styled.button`
  width: 48%;
  padding: 12px;
  border-radius: 20px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: white;
  
  &:first-child {
    background-color: white;
    color: black;
  }

  &:last-child {
    background-color: #464646;
  }
`;
const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  position: absolute; /* Абсолютное позиционирование */
  bottom: 0; /* Прижимаем футер к низу */
  width: 100%; /* Делаем футер на всю ширину */
  padding-bottom: 20px; /* Отступ снизу */
`;

const MainFooterText = styled.h2`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-left: 40px;
`;

const SecondaryFooterText = styled.p`
  color: #b3b3b3;
  font-size: 1rem;
  margin-left: 40px;
`;


const RegistrationPage = () => {
  return (
    <BookPageContainer>
      <ImageContainer />
      <BackgroundContainer> 
        <LogoContainer>
          <Logo src={logo} alt="Логотип" />
          <VerticalLine />
          <LogoText>For your books</LogoText>
        </LogoContainer>
        <TextContainer>
          <Title>Welcome, login to your account</Title>
        </TextContainer>
        <InputContainerCont>
          <InputContainer>
            <Label htmlFor="username">username</Label>
            <Input type="text" id="username" placeholder="Enter your username" />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="password">password</Label>
            <Input type="password" id="password" placeholder="Enter your password" />
          </InputContainer>
        </InputContainerCont>
        <ButtonContainer>
          <Button onClick={() => alert("заглушка")}>Sign In</Button>
          <Button onClick={() => alert("заглушка")}>Sign Up</Button>
        </ButtonContainer>
        <FooterContainer>
          <MainFooterText>LB: Brotherhood of Reader</MainFooterText>
          <SecondaryFooterText>
            Build your library, share your thoughts, and join a community of book lovers.
          </SecondaryFooterText>
        </FooterContainer>
      </BackgroundContainer>
    </BookPageContainer>
  );
};

export default RegistrationPage;