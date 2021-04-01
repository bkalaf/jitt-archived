import React from 'react';
import ReactDOM from 'react-dom';
import { LoginModal } from './LoginModal';

export function ModalContainer() {
    return ReactDOM.createPortal(<div id="modal-container" className="fixed z-50 hidden w-screen h-screen overflow-auto bg-coolGray-500">
            <LoginModal />
        </div>, document.body);
}
