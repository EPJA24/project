import styled from 'styled-components';

const Description = styled.div`
    position: absolute;
    top: 16vw;
    right: 14vw;
    width: 14vw;
    height: auto;
    font-size: 1vw;
    color: #a4a4a4;
    font-family: Inter, sans-serif;
    @media (max-width: 915px) {
        top: 200vw;
        left: 3vw;
        color: white;
        font-size: 4vw;
        height: 5vw;
        width: 60vw;
    }
`;

const ButtonAction = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5vw 1.5vw;
    width: auto;
    height: auto;
    font-size: 1vw;
    font-weight: bold;
    font-family: Inter, sans-serif;
    background-color: #333;
    color: white;
    border: 2px solid transparent;
    border-radius: 0.5vw;
    cursor: pointer;
    transition:
        background-color 0.1s ease,
        border 0.1s ease,
        transform 0.1s ease;
    margin-bottom: 1vw;

    &:hover {
        background-color: #555;
        border: 2px solid white;
    }

    &:active {
        background-color: #222;
    }

    @media (max-width: 768px) {
        padding: 1.5vw 3vw;
        font-size: 3vw;
        border-radius: 2vw;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1vw;
    @media (max-width: 768px) {
    }
`;

const Logo = styled.img`
    weight: auto;
    @media (max-width: 768px) {
        weight: 32px;
        height: 32px;
    }
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
    @media (max-width: 1200px) {
        font-size: 16px;
    }
`;

const BeautifulText = styled.p`
    color: #a4a4a4;
    font-size: 1vw;
    margin-top: 1vw;
    font-family: Inter, sans-serif;
    max-width: 14vw;
    line-height: 1.5;
    @media (max-width: 1200px) {
        font-size: 12px;
        max-width: 34vw;
        margin-top: 15px;
    }
`;

export { Description, ButtonAction, LogoContainer, Logo, VerticalLine, LogoText, BeautifulText };
