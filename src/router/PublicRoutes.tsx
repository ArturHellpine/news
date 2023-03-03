import React, { FC } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoutes, RouteNames } from "./router";

const PublicRoutes: FC = () => {
    return (
        <Routes>
            {publicRoutes.map(route => <Route path={route.path} element={<route.element />} key={route.path} />)}
            <Route path='/*' element={<Navigate replace to={RouteNames.MAIN} />} />
        </Routes>
    );
};

export default PublicRoutes;