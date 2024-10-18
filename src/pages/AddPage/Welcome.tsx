import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const WelcomeMessage = styled.div`
    display: flex;
    font-size: 2.5vw;
    color: white;
    margin-top: 2vw;
    margin-left: 2vw;
    @media (max-width: 915px) {
        font-size: 5vw;
    }
`;

const Welcome = () => {
    const [userName, setUserName] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await axios.get('https://www.backendus.com/auth/user_info', {
                    withCredentials: true
                });
                setUserName(response.data.name);
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        };
        fetchUserInfo();
    }, []);
    return (
        <WelcomeMessage data-testid={'welcome'}>Find your book here, {userName}.</WelcomeMessage>
    );
};

export default Welcome;
