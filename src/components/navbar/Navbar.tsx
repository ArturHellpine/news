import React, { FC } from 'react';
import Button from "../button/Button";
import Modal from "../modal/Modal";
import LoginForm from "../login-form/LoginForm";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import PrivateNavbar from "./PrivateNavbar";
import PublicNavbar from "./PublicNavbar";

const Navbar: FC = () => {
    const { isAuth, user } = useTypedSelector(state => state.auth)
    const { logout, setModal } = useActions()

    const login = () => {
        setModal(true)
    }

    const exit = () => {
        logout()
    }

    return (
        <header className='header'>
            { !isAuth ? <PublicNavbar /> : <PrivateNavbar user={user} /> }
            <div className='navbar__btns'>
                { isAuth ?
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