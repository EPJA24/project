import React, { useState } from 'react';
import {InputContainerCont, InputContainer, Input, Label,  ButtonContainer, Button} from './styles/RegistrationInput.styled'

interface FormData {
    username: string;
    password: string;
  }

const InputAndButtons = () => {
    const [formData, setFormData] = useState<FormData>({ username: '', password: '' });
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { id, value } = e.target;
      setFormData(prevState => ({ ...prevState, [id]: value }));
    };
  
    const handleSubmit = () => {
      console.log('Form Data:', formData);
      alert(`Username: ${formData.username}, Password: ${formData.password}`);
    };
  
    return (
      <>
        <InputContainerCont>
          <InputContainer>
            <Label htmlFor="username">username</Label>
            <Input type="text" id="username" placeholder="Enter your username" value={formData.username} onChange={handleInputChange}/>
          </InputContainer>
          <InputContainer>
            <Label htmlFor="password">password</Label>
            <Input type="password" id="password" placeholder="Enter your password" value={formData.password} onChange={handleInputChange}/>
          </InputContainer>
        </InputContainerCont>
        <ButtonContainer>
          <Button onClick={handleSubmit}>Sign In</Button>
          <Button onClick={() => alert('Sign Up заглушка')}>Sign Up</Button>
        </ButtonContainer>
      </>
    );
  };
  
  export default InputAndButtons;