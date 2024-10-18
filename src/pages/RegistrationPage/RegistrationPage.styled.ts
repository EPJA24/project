import { styled } from 'styled-components';

const BookPageContainer = styled.div`
    display: flex;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;

const BackgroundContainer = styled.div`
    background-color: black;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 100vh;
    @media (max-height: 700px) {
        min-height: 120vh;
    }
`;

export { BookPageContainer, BackgroundContainer };
