import React, { HTMLAttributes } from 'react';
import { Button as Btn, Icon } from './Button.styled';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    icon?: JSX.Element;
    primary?: boolean;
}

const Button = ({ children, icon, primary, ...props }: ButtonProps) => {
    return (
        <Btn $primary={primary} {...props}>
            {children}
            {icon && <Icon $primary={primary}>{icon}</Icon>}
        </Btn>
    );
};

export default Button;
