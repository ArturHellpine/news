import React, { FC } from 'react';
import { useTypedSelector } from "../hooks/useTypedSelector";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const AuthProvider: FC = () => {
    const { isAuth } = useTypedSelector(state => state.auth)

    return (
        isAuth
            ?
            <PrivateRoutes />
            :
            <PublicRoutes />
    );
};

export default AuthProvider;