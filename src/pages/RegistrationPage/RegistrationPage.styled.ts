import { styled } from 'styled-components';

const BookPageContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;



export { BookPageContainer }