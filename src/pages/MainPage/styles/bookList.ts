import styled from 'styled-components';

const Cover = styled.img`
    width: 10vw;
    height: 12vw;
    object-fit: cover;
    margin-right: 2vw;
    border-radius: 10px;
    @media (max-width: 915px) {
        width: 25vw;
        height: 29vw;
    }
`;
const Container = styled.li<{ isRead: boolean }>`
    display: flex;
    cursor: pointer;
    align-items: flex-start;
    border: 0.2vw solid white;
    border-radius: 2vw;
    padding: 1.5vw;
    width: 80%;
    background-color: ${({ isRead }) =>
        isRead ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
    @media (max-width: 915px) {
        padding: 3vw;
        width: 90%;
    }
`;

const BookName = styled.h2`
    font-size: 2vw;
    font-weight: bold;
    margin: 0 0 1vw 0;
    color: white;
    font-family: Inter, sans-serif;
    @media (max-width: 915px) {
        font-size: 4vw;
    }
`;

const BookDescription = styled.p`
    font-size: 1vw;
    font-weight: normal;
    margin: 0;
    color: #a4a4a4;
    font-family: Inter, sans-serif;
    max-height: 5vw;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    @media (max-width: 915px) {
        font-size: 2.2vw;
    }
`;

const ReadMoreButton = styled.button`
    background: none;
    color: #a4a4a4;
    border: none;
    cursor: pointer;
    font-size: 1vw;
    margin-top: 0.5vw;
    text-decoration: underline;
    @media (max-width: 915px) {
        font-size: 2.2vw;
    }
`;

const FullDescription = styled.p`
    font-size: 1vw;
    color: #a4a4a4;
    font-family: Inter, sans-serif;
    margin: 0;
    @media (max-width: 915px) {
        font-size: 2.2vw;
    }
`;

const Wrapper = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 2vw;
    overflow-y: auto;
    width: 100%;
    max-height: 100%;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
    align-items: center;
`;

export { Cover, Container, BookName, BookDescription, Wrapper, FullDescription, ReadMoreButton };
