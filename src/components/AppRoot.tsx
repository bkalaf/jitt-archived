import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { JITT } from '../events';
import { LoginModal } from './LoginModal';
import { ModalContainer } from './ModalContainer';
import { SignInModal, SignInModalButton } from './SignInModal';
export const DataStore = React.createContext(null);
export const EventAggregator = React.createContext(null);

export function Framework() {
    return (
        <section className="container relative">
            <div> App goes here</div>
        </section>
    );
}
interface DataAttributes {
    target?: string;
    toggle?: string;
    animationIn?: string[];
    animationOut?: string[];
    isDismissable: boolean;
}
export function getDataMap(el: HTMLElement | null): DataAttributes {
    if (!el) {
        return { isDismissable: false };
    }
    const dataset = el.dataset;

    return {
        target: dataset.target,
        toggle: dataset.toggle,
        isDismissable: dataset.dismissable === 'true' ? true : false,
        animationIn: dataset.inAnimation
            ? [`animate__animated`, `animate__${dataset.animationIn}`]
            : [],
        animationOut: dataset.outAnimation
            ? [`animate__animated`, `animate__${dataset.animationOut}`]
            : [],
    };
}
export default function AppRoot() {
    React.useEffect(() => {
        var openmodal = document.querySelectorAll('.modal-open')
    for (var i = 0; i < openmodal.length; i++) {
      openmodal[i].addEventListener('click', function(event){
    	event.preventDefault()
    	toggleModal()
      })
    }
    
    const overlay = document.querySelector('.modal-overlay')
    overlay?.addEventListener('click', toggleModal)
    
    var closemodal = document.querySelectorAll('.modal-close')
    for (var i = 0; i < closemodal.length; i++) {
      closemodal[i].addEventListener('click', toggleModal)
    }
    
    document.onkeydown = function(evt) {
      evt = evt || window.event
      var isEscape = false
      if ("key" in evt) {
    	isEscape = (evt.key === "Escape" || evt.key === "Esc")
      } else {
    	isEscape = false
      }
      if (isEscape && document.body.classList.contains('modal-active')) {
    	toggleModal()
      }
    };
    
    
    function toggleModal () {
      const body = document.querySelector('body')
      const modal = document.querySelector('.modal')
      modal?.classList.toggle('opacity-0')
      modal?.classList.toggle('pointer-events-none')
      body?.classList.toggle('modal-active')
    }
    }, [])
    return (
        <BrowserRouter>
            <DataStore.Provider value={null}>
                <EventAggregator.Provider value={null}>
                    <div className="relative w-100 h-100">
                        <Framework />
                        <SignInModalButton />
                    </div>
                </EventAggregator.Provider>
            </DataStore.Provider>
        </BrowserRouter>
    );
}
