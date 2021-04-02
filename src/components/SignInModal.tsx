import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ReactDOM from 'react-dom';

export function SignInModalButton() {
    const [modalOpen, setOpen ] = React.useState(false);
    function toggle() {
        const modal = document.querySelector('.modal');
        const body = document.body;
        setOpen(!modalOpen);
        body.classList.toggle('modal-active');
        modal?.classList.toggle('opacity-0');
        modal?.classList.toggle('pointer-events-none');
    }
    return <React.Fragment>
        <button className="px-4 py-2 font-bold text-gray-500 bg-transparent border border-gray-500 rounded-full modal-open hover:border-indigo-500 hover:text-indigo-500" onClick={toggle}>
            Open Modal
        </button>
        <SignInModal toggle={toggle} shown={modalOpen}></SignInModal>
    </React.Fragment>
}
export function SignInModal({ shown, toggle }: { shown: boolean, toggle: () => void }) {
    
    return ReactDOM.createPortal(shown ? <div className="z-50 w-11/12 mx-auto bg-white rounded shadow-lg modal-container md:max-w-md overlow-y-auto">
        <button className="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer modal-close" onClick={toggle}>
            <FontAwesomeIcon icon={faWindowClose} />
        </button>
            Modal
        </div> : null, document.getElementById('modal-root')!);
}