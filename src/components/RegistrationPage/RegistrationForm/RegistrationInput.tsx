import React, { useState } from 'react';
import { InputContainerCont, InputContainer, Input, Label, ButtonContainer, Button, ErrorMessage } from './styles/RegistrationInput.styled';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from './schemazod';
import login from '../../../pages/RegistrationPage/login/login';
import { setCookie } from 'cookies-next';

type FormData = z.infer<typeof schema>;

const InputAndButtons = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data: FormData) => {
    try {
      const response = await login({ username: data.username, password: data.password });
      if (response.resCode === 200) {
        setCookie('is_authorized', true);
        setCookie('token', response.token?.access_token);
        console.log('token: ', response.token?.access_token);
        window.location.href = '/lb-team/mybook';
      } else {
        setErrorMessage(response.errorMsg || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('An error occurred during login.');
    }
  };

  return (
    <>
      <InputContainerCont>
        <InputContainer>
          <Label htmlFor="username">username</Label>
          <Input type="text" id="username" placeholder="Enter your username" {...register('username')} />
          <ErrorMessage show={!!errors.username}>{errors.username?.message}</ErrorMessage>
        </InputContainer>
        <InputContainer>
          <Label htmlFor="password">password</Label>
          <Input type="password" id="password" placeholder="Enter your password" {...register('password')} />
          {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        </InputContainer>
      </InputContainerCont>
      <ButtonContainer>
        <Button onClick={handleSubmit(onSubmit)}>Sign In</Button>
        <Button onClick={() => alert('Sign Up заглушка')}>Sign Up</Button>
      </ButtonContainer>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
};

export default InputAndButtons;
