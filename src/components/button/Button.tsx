import React, { FC } from 'react';
import classes from './Button.module.css'

interface ButtonProps {
    children: React.ReactNode
    disabled?: boolean
    onClick?: (e: React.FormEvent) => void
}

const Button: FC<ButtonProps> = ({children, ...props}) => {
    return (
        <button {...props} className={classes.btn}>
            {children}
        </button>
    );
};

export default Button;