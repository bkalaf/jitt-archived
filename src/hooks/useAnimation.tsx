import React from 'react';

const _ANIMATE_ = 'animate__animated';
export type ElementState = 'shown' | 'showing' | 'hiding' | 'hidden';

export function nextState(current: ElementState): ElementState {
    const _map: { [ix: number]: ElementState } = {
        0: 'hidden',
        1: 'showing',
        2: 'shown',
        3: 'hiding',
    };
    const ix = Object.entries(_map).filter(([k, v]) => v === current)[0][0];
    return parseInt(ix, 10) + 1 === 4 ? _map[0] : _map[parseInt(ix, 10) + 1];
}

const isTransitioning = (state: ElementState) => state === 'showing' || state === 'hiding';
const canShow = (state: ElementState) => state === 'hidden';
const canHide = (state: ElementState) => state === 'shown';

function compR<T, U, V>(f: (x: T) => U, g: (x: U) => V) {
    return (arg: T) => g(f(arg));
}
function invoke(func?: () => void) {
    if (func) {
        func();
    }
}
function mutators(el: HTMLElement | null, cn?: string) {
    return {
        add: () => (cn ? el?.classList.add(_ANIMATE_, cn) : void 0),
        remove: () => (cn ? el?.classList.remove(_ANIMATE_, cn) : void 0),
    };
}
export function useAnimation(
    elementID: string,
    state?: ElementState,
    inTransition?: string,
    outTransition?: string,
    beforeShow?: () => void,
    afterHidden?: () => void
): { show: () => void; hide: () => void; toggle: () => void, getState(): ElementState } {
    const el = document.getElementById(elementID);
    const [elementState, setState] = React.useState<ElementState>('hidden');
    const goToNext = compR(nextState, setState);

    function show() {
        return new Promise<string>((resolve, reject) => {
            const { add, remove } = mutators(el, inTransition);
            const handleEndAnimation = (ev: AnimationEvent) => {
                ev.stopPropagation();
                remove();
                resolve('done');
                goToNext(elementState);
            };
            if (canShow(elementState)) {
                goToNext(elementState);
                invoke(beforeShow);
                add();
                el?.addEventListener('animationend', handleEndAnimation);
            } else {
                const msg = `invalid state to trigger show() : ${elementState}`;
                console.error(msg);
                reject(msg);
            }
        });
    }
    function hide() {
        return new Promise<string>((resolve, reject) => {
            const { add, remove } = mutators(el, outTransition);
            const handleEndAnimation = (ev: AnimationEvent) => {
                ev.stopPropagation();
                remove();
                invoke(afterHidden);
                resolve('done');
                goToNext(elementState);
            };
            if (canHide(elementState)) {
                goToNext(elementState);
                add();
                el?.addEventListener('animationend', handleEndAnimation);
            } else {
                const msg = `invalid state to trigger hide() : ${elementState}`;
                console.error(msg);
                reject(msg);
            }
        });
    }
    
    return {
        show,
        hide,
        toggle: show,
        getState: () => elementState
    };
}
