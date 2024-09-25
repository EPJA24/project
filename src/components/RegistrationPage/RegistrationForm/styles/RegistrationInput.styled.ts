import { styled } from 'styled-components';

const InputContainerCont = styled.div`
  margin-top: 50px;
`;

const InputContainer = styled.div`
  margin-top: 2vh;
  width: 80%;
  display: flex; 
  flex-direction: column; 
  align-items: center;
  margin-left: auto; 
  margin-right: auto; 
`;

const Label = styled.label`
  color: white;
  font-size: 19px;
  margin-bottom: 8px;
  display: block;
  align-items: center;
  width: 100%;
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 20px;
  border: none;
  background-color: #464646;
  margin-bottom: 20px;
  font-size: 1rem;
  align-items: center;
  color: white;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 20px auto 0;
`;

const Button = styled.button`
  width: 48%;
  padding: 12px;
  border-radius: 20px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: white;
  
  &:first-child {
    background-color: white;
    color: black;
  }

  &:last-child {
    background-color: #464646;
  }
`;

export {InputContainerCont, InputContainer, Input, Label,  ButtonContainer, Button};