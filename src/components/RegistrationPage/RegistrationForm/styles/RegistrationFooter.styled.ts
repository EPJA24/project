import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  position: absolute; 
  bottom: 0;
  width: 100%; 
  padding-bottom: 20px; 
`;

const MainFooterText = styled.h2`
  color: white;
  font-size: 3vh;
  margin-bottom: 10px;
  margin-left: 40px;
  @media (max-width: 768px) {
     margin-left: 20px;
     margin-bottom: 5px;
     margin-right:10px;
  }
`;

const SecondaryFooterText = styled.p`
  color: #b3b3b3;
  font-size: 2vh;
  margin-left: 40px;
  @media (max-width: 768px) {
     margin-left: 20px;
     margin-right:10px;
  }
`;

export { FooterContainer, MainFooterText, SecondaryFooterText };