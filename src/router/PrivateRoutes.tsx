import React, { FC } from 'react';
import { privateRoutes, RouteNames } from "./router";
import { Navigate, Route, Routes } from "react-router-dom";

const PrivateRoutes: FC = () => {
    return (
        <Routes>
            {privateRoutes.map(route => <Route path={route.path} element={<route.element />} key={route.path} />)}
            <Route path='/*' element={<Navigate replace to={RouteNames.PROFILE} />} />
        </Routes>
    );
};

export default PrivateRoutes;