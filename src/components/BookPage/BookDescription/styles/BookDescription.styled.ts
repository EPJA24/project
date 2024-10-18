import { styled } from 'styled-components';

const BookDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2;
    padding: 70px 50px;
    background-color: white;
    overflow-y: auto;
    overflow-x: hidden;

    @media screen and (max-width: 1024px) {
        overflow: hidden;
        min-height: 100vh;
    }

    @media screen and (max-width: 430px) {
        padding: 35px 20px;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    /* @media screen and (max-width: 400px) {
    align-self: center;
  } */
`;

const EditionList = styled.ul`
    display: flex;
    max-width: 1200px;
    flex-wrap: wrap;
    gap: 30px;
    padding: 0;

    @media screen and (max-width: 430px) {
        gap: 10px;
        justify-content: left;
    }
`;

const Description = styled.p`
    color: gray;
    max-width: 700px;
    font-size: 14px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    line-height: 20px;
    margin-bottom: 40px;
`;

export { BookDescriptionContainer, Description, Container, EditionList };
