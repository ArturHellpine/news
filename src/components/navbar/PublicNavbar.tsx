import React, { FC } from 'react';
import Button from "../button/Button";
import { RouteNames } from "../../router/router";
import { useNavigate } from "react-router-dom";

const PublicNavbar: FC = () => {
    const router = useNavigate()

    return (
        <div>
            <Button onClick={() => router(RouteNames.MAIN)}>MAIN</Button>
            <Button onClick={() => router(RouteNames.NEWS)}>NEWS</Button>
        </div>
    );
};

export default PublicNavbar;