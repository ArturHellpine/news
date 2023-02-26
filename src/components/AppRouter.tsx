import React, {FC} from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import {privateRoutes, publicRoutes, RouteNames} from "../router/router";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter: FC = () => {
    const {isAuth} = useTypedSelector(state => state.auth)

    return (
        isAuth ?
            <Routes>
                {privateRoutes.map(route => <Route path={route.path} element={<route.element />} key={route.path} />)}
                <Route path='/*' element={<Navigate replace to={RouteNames.PROFILE} />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route => <Route path={route.path} element={<route.element />} key={route.path} />)}
                <Route path='/*' element={<Navigate replace to={RouteNames.MAIN} />} />
            </Routes>
    );
};

export default AppRouter;