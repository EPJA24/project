import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    height: 100vh;
    background-color: black;
`;

export const LeftSection = styled.div<{ BurgerMenu: boolean }>`
    display: flex;
    flex-direction: column;
    width: 100%; // Здесь, чтобы LeftSection занимал всю ширину экрана
`;

export const RightSection = styled.div<{ BurgerMenu: boolean }>`
    display: flex;
    flex-direction: column;
    width: ${({ BurgerMenu }) => BurgerMenu ? '40%' : '20%'};
    transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;
    transform: ${({ BurgerMenu }) => BurgerMenu ? 'translateX(0)' : 'translateX(100%)'};
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    background-color: black;
    z-index: 10;
    padding: 20px;

    @media (min-width: 1200px) {
        transform: translateX(0);
        position: static;
        background-color: transparent;
        padding: 0;
    }
`;

export const CoolButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 20px; // Переносим кнопку в нижнюю часть
    right: 20px; // Кнопка будет слева
    padding: 10px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    z-index: 11;

    @media (min-width: 1200px) {
        display: none;
    }
`;

interface MenuIconProps {
    isOpen: boolean;
}

export const MenuIcon = styled.div<MenuIconProps>`
    width: 30px;
    height: 24px;
    position: relative;
    cursor: pointer;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(0deg)' : 'rotate(0deg)')};
    transition: transform 0.3s ease-in-out;

    @media (min-width: 1200px) {
        width: 20px;
        height: 16px;
    }

    span {
        display: block;
        position: absolute;
        height: 3px;
        width: 100%;
        background: white;
        border-radius: 9px;
        opacity: 1;
        left: 0;
        transform: rotate(0deg);
        transition: 0.25s ease-in-out;

        &:nth-child(1) {
            top: ${({ isOpen }) => (isOpen ? '10px' : '0px')};
            transform: ${({ isOpen }) => (isOpen ? 'rotate(135deg)' : 'rotate(0deg)')};
        }

        &:nth-child(2) {
            top: 10px;
            transform: ${({ isOpen }) => (isOpen ? 'translateX(100%)' : 'translateX(0)')};
            opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
        }

        &:nth-child(3) {
            top: ${({ isOpen }) => (isOpen ? '10px' : '20px')};
            transform: ${({ isOpen }) => (isOpen ? 'rotate(-135deg)' : 'rotate(0deg)')};
        }
    }
`;
