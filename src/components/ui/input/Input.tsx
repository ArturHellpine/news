import React, {FC} from 'react';
import classes from './Input.module.css'

interface InputProps {
    type: string
    placeholder: string
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = (props) => {
    return (
        <input className={classes.input} {...props} />
    );
};

export default Input;