import React, { useState } from 'react';
import {InputContainerCont, InputContainer, Input, Label,  ButtonContainer, Button, ErrorMessage} from './styles/RegistrationInput.styled'
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from './schemazod';

type FormData = z.infer<typeof schema>;

const InputAndButtons = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema),});
  
  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data);
    alert(`Username: ${data.username}, Password: ${data.password}`);
  };
  
    return (
      <>
        <InputContainerCont>
          <InputContainer>
            <Label htmlFor="username">username</Label>
            <Input type="text" id="username" placeholder="Enter your username" {...register('username')}/>
            <ErrorMessage show={!!errors.username}>{errors.username?.message}</ErrorMessage>
          </InputContainer>
          <InputContainer>
            <Label htmlFor="password">password</Label>
            <Input type="password" id="password" placeholder="Enter your password" {...register('password')}/>
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
          </InputContainer>
        </InputContainerCont>
        <ButtonContainer>
          <Button onClick={handleSubmit(onSubmit)}>Sign In</Button>
          <Button onClick={() => alert('Sign Up заглушка')}>Sign Up</Button>
        </ButtonContainer>
      </>
    );
  };
  
  export default InputAndButtons;