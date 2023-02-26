import React, {FC} from 'react';
import './Modal.css'
import {useTypedSelector} from "../../../hooks/useTypedSelector";

interface ModalProps {
    children: React.ReactNode
}

const Modal: FC<ModalProps> = ({children}) => {
    const {modal} = useTypedSelector(state => state.auth)
    return (
        <div className={modal ? 'modal active' : 'modal'}>
            <div className={modal ? 'modal__content active' : 'modal__content'}>
                {children}
            </div>
        </div>
    );
};

export default Modal;