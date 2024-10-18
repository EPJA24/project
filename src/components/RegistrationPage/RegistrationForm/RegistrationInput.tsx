import React, { useState, useEffect } from 'react';
import {
    InputContainerCont,
    InputContainer,
    Input,
    Label,
    ButtonContainer,
    Button,
    ErrorMessage
} from './styles/RegistrationInput.styled';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from './schemazod';
import login from '../../../pages/RegistrationPage/login/login';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

type FormData = z.infer<typeof schema>;

const InputAndButtons = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<FormData>({ resolver: zodResolver(schema) });
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (errorMessage) {
            const timer = setTimeout(() => {
                setErrorMessage('');
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [errorMessage]);

    const onSubmit = async (data: FormData) => {
        try {
            const response = await login({
                username: data.username,
                password: data.password
            });
            if (response.resCode === 200) {
                Cookies.set('is_auth', true);
                navigate('/lb-team/mybook');
            } else {
                setErrorMessage(response.errorMsg || 'Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
            setErrorMessage('An error occurred during login.');
        }
    };

    const handleSignUp = async (data: FormData) => {
        try {
            const response = await fetch('https://www.backendus.com/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: data.username,
                    password: data.password
                })
            });
            if (response.ok) {
                setSuccessMessage('Registration successful, you can log account!');
                reset();
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.message || 'Registration failed');
            }
        } catch (error) {
            console.error('Registration error:', error);
            setErrorMessage('An error occurred during registration.');
        }
    };

    return (
        <>
            <InputContainerCont>
                <InputContainer>
                    <Label htmlFor="username">username</Label>
                    <Input
                        type="text"
                        id="username"
                        placeholder="Enter your username"
                        {...register('username')}
                    />
                </InputContainer>
                <InputContainer>
                    <Label htmlFor="password">password</Label>
                    <Input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        {...register('password')}
                    />
                    {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                </InputContainer>
            </InputContainerCont>
            <ButtonContainer>
                <Button onClick={handleSubmit(onSubmit)}>Sign In</Button>
                <Button onClick={handleSubmit(handleSignUp)}>Sign Up</Button>
            </ButtonContainer>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            {successMessage && <ErrorMessage>{successMessage}</ErrorMessage>}
        </>
    );
};

export default InputAndButtons;
