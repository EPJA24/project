import { styled } from "styled-components";
import { Title } from "../styles";

const ModalWrapper = styled.div<{ $width: number; $height: number }>`
  position: absolute;
  border: 2px solid black;
  border-radius: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  width: fit-content;
  height: fit-content;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
`;

const CloseButton = styled.button`
  border: none;
  width: fit-content;
  height: fit-content;
  background-color: transparent;
  cursor: pointer;
`;

const ModalHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  margin: 15px 0;

  @media screen and (max-width: 500px) {
    gap: 10px;
  }
`;

const ModalTitle = styled(Title)`
  margin: 0;
  font-size: 36px;
  font-weight: bold;
  color: black;

  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export { ModalWrapper, CloseButton, ModalTitle, ModalHeaderWrapper, Content };
