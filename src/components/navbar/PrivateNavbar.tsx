import React, { FC } from 'react';
import { IAdmin } from "../../types/IAdmin";

interface PrivateNavbarProps {
    user: IAdmin
}

const PrivateNavbar: FC<PrivateNavbarProps> = ({user}) => {
    return (
        <div>
            <span className='span__username'>{user.username}</span>
        </div>
    );
};

export default PrivateNavbar;