
import styled from 'styled-components';
export const Add = styled.button`
    margin: 0; 
    width: 85%;
    height: 3vw;
    border-radius: 1vw;
    font-weight: bold;
    font-family: Inter, sans-serif;
    font-size: 1.4vw;
    background-color: white; 
    color: black; 
    @media (max-width: 915px) {
        margin: 0; 
        font-size: 2.5vw;
        height: 7vw;
        border-radius: 2vw;
        width: 30vw;
    }
`;

export const ButtonContainer = styled.div`
    display: flex; 
    justify-content: center;
    width: 100%; 
    margin-top: 2vw; 
`;