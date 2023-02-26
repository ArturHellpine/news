import React, {FC} from 'react';
import Button from "./ui/button/Button";
import {useNavigate} from "react-router-dom";
import Modal from "./ui/modal/Modal";
import LoginForm from "./ui/login-form/LoginForm";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const Navbar: FC = () => {
    const {isAuth, user} = useTypedSelector(state => state.auth)
    const router = useNavigate()
    const {logout, setModal} = useActions()

    const login = () => {
        setModal(true)
    }
    const exit = () => {
        logout()
    }

    return (
        <header className='header'>
            {!isAuth ?
                <div>
                    <Button onClick={() => router('/main')}>MAIN</Button>
                    <Button onClick={() => router('/news')}>NEWS</Button>
                </div>
                :
                <span className='span__username'>{user.username}</span>
            }

            <div style={{marginRight: -30}}>
                {isAuth ?
                    <Button onClick={exit}>LOGOUT</Button>
                    :
                    <Button onClick={login}>LOGIN</Button>
                }
            </div>

            <Modal>
                <LoginForm/>
            </Modal>
        </header>
    );
};

export default Navbar;