import React, { FC, useEffect } from 'react';
import AuthProvider from "./router/AuthProvider";
import Navbar from "./components/navbar/Navbar";
import './styles/App.css'
import { useActions } from "./hooks/useActions";
import { IAdmin } from "./types/IAdmin";

const App: FC = () => {
    const { setUser, setIsAuth } = useActions()

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setUser({username: localStorage.getItem('username' || '')} as IAdmin)
            setIsAuth(true)
        }
    },[])

    return (
        <>
            <Navbar />
            <AuthProvider />
        </>
    );
};

export default App;