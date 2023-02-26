import React, {FC} from 'react';
import './ErrorMessage.css'

interface ErrorMessageProps {
    error: string
}

const ErrorMessage: FC<ErrorMessageProps> = ({error}) => {
    return (
        <span className='error__message'>
            {error}
        </span>
    );
};

export default ErrorMessage;