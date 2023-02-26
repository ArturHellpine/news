import React, {FC, useState} from 'react';
import Input from "../input/Input";
import './Login.css'
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import ErrorMessage from "../error/ErrorMessage";
import {useActions} from "../../../hooks/useActions";


const LoginForm: FC = () => {
    const [value, setValue] = useState({name: '', password: ''})
    const {error, user} = useTypedSelector(state => state.auth)
    const {login, setModal, setError} = useActions()

    const submit = (e: React.FormEvent) => {
        login(value.name, value.password)
        e.preventDefault()
        if(value.name.trim() !== user.username || value.password.trim() !== user.password) {
            setValue({name: '', password: ''})
            return
        }
    }

    const cancel = (e: React.FormEvent) => {
        e.preventDefault()
        setModal(false)
        setValue({name: '', password: ''})
        setError('')
    }

    return (
        <form onSubmit={submit}>
            <span className='login__form'>Login to Your account</span>
            <Input
                onChange={(event) => setValue({...value, name: event.target.value})}
                value={value.name}
                type="text"
                placeholder='Login'/>
            <hr/>

            <Input
                onChange={(event) => setValue({...value, password: event.target.value})}
                value={value.password}
                type="password"
                placeholder='Password'/>
            <hr/>
            {error && <ErrorMessage error={error} />}
            <div className='login__btns'>
                <button type='button' className='login__btn' onClick={cancel}>Cancel</button>
                <button className='login__btn'>Submit</button>
            </div>
        </form>
    );
};

export default LoginForm;