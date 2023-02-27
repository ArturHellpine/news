import React, {FC, useEffect} from 'react';
import AuthProvider from "./router/AuthProvider";
import Navbar from "./components/Navbar";
import './styles/App.css'
import {useActions} from "./hooks/useActions";
import {IUser} from "./types/IUser";

const App: FC = () => {
    const {setUser, setIsAuth} = useActions()

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setUser({username: localStorage.getItem('username' || '')} as IUser)
            setIsAuth(true)
        }
    }, [])

    return (
        <>
            <Navbar />
            <AuthProvider />
        </>
    );
};

export default App;