import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    margin-left: 40px;
    margin-top: 32px;
    align-items: center;
    @media (max-width: 768px) {
        margin-left: 20px;
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
    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    margin-top: 20%;
`;

const Title = styled.h1`
    font-size: 2rem;
    margin-left: 40px;
    @media (max-width: 768px) {
        margin-left: 20px;
        margin-right: 10px;
    }
`;

export { LogoContainer, Logo, VerticalLine, LogoText, TextContainer, Title };
