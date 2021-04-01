import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { JITT } from '../events';
import { ModalContainer } from './ModalContainer';
export const DataStore = React.createContext(null);
export const EventAggregator = React.createContext(null);

export function Framework() {
    return <section className="container"></section>;
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
    return (
        <BrowserRouter>
            <DataStore.Provider value={null}>
                <EventAggregator.Provider value={null}>
                    <div className="relative w-100 h-100">
                        <Framework />
                        <button
                            data-target="login-modal"
                            data-toggle="modal"
                            onClick={() => JITT.loginModal.toggle()}>
                            Login
                        </button>
                    </div>
                    <ModalContainer />
                </EventAggregator.Provider>
            </DataStore.Provider>
        </BrowserRouter>
    );
}
