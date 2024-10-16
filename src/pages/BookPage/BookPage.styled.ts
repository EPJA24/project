import { styled } from "styled-components";

const BookPageContainer = styled.div`
  display: flex;
  height: 100vh;

  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    overflow-y: auto;
    min-height: 100vh;
    max-height: none;
  }
`;

export { BookPageContainer };
