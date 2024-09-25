import styled from 'styled-components';

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

export { FooterContainer, MainFooterText, SecondaryFooterText };