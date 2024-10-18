import { styled } from 'styled-components';

const Button = styled.button<{ $primary?: boolean }>`
    --primary-color: ${(props) => (props.$primary ? 'black' : 'white')};
    --primary-text-color: ${(props) => (props.$primary ? 'white' : 'black')};
    --disabled-color: ${(props) => (props.$primary ? '4c4c4c' : 'b2b2b2')};
    --hover-color: #989898;

    background-color: var(--primary-color);
    height: 59px;
    border: none;
    display: inline-flex;
    font-size: 16px;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    padding: 4px 10px;
    width: fit-content;
    max-width: 250px;
    min-width: 150px;
    color: var(--primary-text-color);
    border-radius: 30px;
    transition: ease-in 0.1s;

    &:hover {
        color: var(--hover-color);
    }

    &:disabled {
        pointer-events: initial !important;
        cursor: not-allowed;
        color: #b2b2b2;
    }

    &:active:not(:disabled) {
        transform: scale(0.97);
    }

    @media screen and (max-width: 1024px) {
        width: 100%;
    }

    @media screen and (max-width: 500px) {
        height: 45px;
    }

    @media screen and (max-width: 420px) {
        min-width: 80px;
        gap: 4px;
    }
`;

const Icon = styled.div<{ $primary?: boolean }>`
    --primary-color: ${(props) => (!props.$primary ? 'black' : 'white')};
    --primary-text-color: ${(props) => (props.$primary ? 'black' : 'white')};

    background-color: var(--primary-color);
    color: var(--primary-text-color);
    padding: 8px;
    border: none;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1024px) {
        padding: 4px;
    }
`;

export { Button, Icon };
