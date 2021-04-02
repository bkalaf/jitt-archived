import React from 'react';
import { JITT } from '../events';

const $$BOUNCE_IN_UP = 'animate__bounceInUp';
const $$BOUNCE_OUT_DOWN = 'animate__bounceOutDown';
const $$ANIMATED = 'animate__animated';
const $$BLOCK = 'block';
const $$HIDDEN = 'hidden';

const animations = (transition: string) => [$$ANIMATED, transition];

export function LoginModal() {
    const el: HTMLElement | null = document.getElementById('modal-container');
    const [isVisible, setVisibility] = React.useState(false);
    const [isTransitioning, setTransitioning] = React.useState(false);
    console.log(`isTransitioning: ${isTransitioning}`);
    React.useEffect(() => {
        if (isVisible) {
            show()
                .then(() => setTransitioning(false))
                .catch(console.error);
        } else {
            hide()
                .then(() => setTransitioning(false))
                .catch(console.error);
        }
    }, [isVisible]);
    const setShowAnimation = () => el?.classList.add(...animations($$BOUNCE_IN_UP));
    const setHideAnimation = () => el?.classList.add(...animations($$BOUNCE_OUT_DOWN));
    const removeAnimations = () =>
        el?.classList.remove($$ANIMATED, $$BOUNCE_IN_UP, $$BOUNCE_OUT_DOWN);
    const beforeShow = () => {
        el?.classList.add($$BLOCK);
        el?.classList.remove($$HIDDEN);
    };
    const afterHide = () => {
        el?.classList.add($$HIDDEN);
        el?.classList.remove($$BLOCK);
    };

    const show = () => {
        return new Promise((resolve: (s: string) => void, reject: (err: Error) => void) => {
            function handler() {
                removeAnimations();
                resolve('animation complete');
            }
            setTransitioning(true);
            beforeShow();
            setShowAnimation();
            el?.addEventListener('animationend', handler, { once: true });
        });
    };
    const hide = () => {
        return new Promise((resolve: (s: string) => void, reject: (err: Error) => void) => {
            function handler() {
                afterHide();
                removeAnimations();
                resolve('animation complete');
            }
            setTransitioning(true);
            setHideAnimation();
            el?.addEventListener('animationend', handler, { once: true });
        });
    };
    // const { show, hide, getState } = useAnimation(
    //     'login-modal',
    //     'hidden',
    //     $$BOUNCE_IN_UP,
    //     $$BOUNCE_OUT_DOWN,
    //     () => {
    //         const el = ;
    //         el?.classList.remove('hidden');
    //         el?.classList.add('block');
    //     },
    //     () => {
    //         const el = document.getElementById('login-modal');
    //         el?.classList.remove('block');
    //         el?.classList.add('hidden');
    //     }
    // );
    JITT.loginModal = {
        show: () => {
            console.log(`JITT.loginModal.show called`);
            setVisibility(true);
        },
        hide: () => {
            console.log(`JITT.loginModal.hide called`);
            setVisibility(false);
        },
        toggle: () => {
            console.log('togglecalled');
            console.log(`isVisible: ${isVisible} isTransitioning: ${isTransitioning}`);
            if (isVisible) {
                setVisibility(false);
            } else {
                setVisibility(true);
            }
        },
    };

    return <div role="dialog" id="login-modal" className="absolute w-full h-full bg-gray-900 opacity-0">
            <form
                className="items-center justify-center max-w-md shadows-lg"
                id="loginForm"
                method="POST"
                action="/login">
                <header className="text-2xl font-bold text-center">Login</header>
                <fieldset className="grid grid-cols-2" form="loginForm">
                    <label htmlFor="emailInput">Email Address</label>
                    <input type="email" id="emailInput" value="" />
                    <label htmlFor="passwordInput">Password</label>
                    <input type="password" id="passwordInput" value="" />
                </fieldset>
                <footer className="flex justify-evenly">
                    <button
                        data-dismiss
                        data-target="loginModal"
                        type="button"
                        id="loginCancelButton">
                        Cancel
                    </button>
                    <input form="loginForm" type="reset" id="loginResetButton" />
                    <input form="loginForm" type="submit" id="loginSubmit" />
                </footer>
            </form>
        </div>;
}
