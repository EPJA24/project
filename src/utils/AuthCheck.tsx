import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const AuthGuard = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const isAuth = Cookies.get('is_auth');
        if (!isAuth || isAuth === 'false') {
            navigate('/lb-team/registration');
        }
    }, [navigate]);

    return <>{children}</>;
};

export default AuthGuard;
