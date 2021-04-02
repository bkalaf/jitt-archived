import React from 'react';
import ReactDOM from 'react-dom';
import { Children } from './Children';
import { LoginModal } from './LoginModal';

interface ModalContainerProps {
    children?: Children;
    isVisible?: boolean;
}
export function ModalContainer(props: ModalContainerProps) {
    const { isVisible, ...spread } = props;
    function handleEffect() {
        console.log('handleEffect');
        if (isVisible) {
            document.getElementById('modal-container')?.classList.remove('hidden');
            // document.getElementById('modal-container')?.classList.remove('animate__animated', 'animate__bounceInUp');
        } else {
            document.getElementById('modal-container')?.classList.add('hidden');
        }
    }
    React.useEffect(() => {
        handleEffect();
    }, [isVisible])
    const className = "fixed top-0 left-0 flex items-center justify-center w-full h-full opacity-0 pointer-events-none modal";
    return <div id="modal-container" className={className} {...props}>
        </div>
}
