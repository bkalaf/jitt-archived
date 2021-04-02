import React from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactFormProps } from '../ReactButtonProps';
import ReactDOM from 'react-dom';
import constants from './../../constants';
import { IFieldInfo, ModalFooter } from './ModalFooter';

export function ModalBody<T>(
    props: {
        icon: IconDefinition;
        name: string;
        formID: string;
        title: string;
        setupSubmit: (m: Map<string, string>) => string[];
        handler: (...args: string[]) => Promise<T>;
        isOpen: boolean;
        formData: Map<string, string>;
        setFormData: React.Dispatch<React.SetStateAction<Map<string, string>>>;
        setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    } & ReactFormProps
) {
    const {
        icon, children, formID, name, title, setFormData, formData, handler, setupSubmit, isOpen, setIsOpen, ...spread
    } = props;
    const [fieldInfo, setFieldInfo] = React.useState<IFieldInfo<string>[]>([]);
    const [feedback, setFeedback] = React.useState<string | undefined>(undefined);
    const formRef = React.useCallback((node) => {
        const elements = node?.elements;
        let result = [];
        for (let index = 0; index < (elements?.length ?? 0); index++) {
            const element = elements?.[index]!;
            if (element.tagName === 'INPUT') {
                const el = element as HTMLInputElement;
                result.push({ type: el.type, name: el.name, defaultValue: el.defaultValue });
            }
        }
        setFieldInfo(result);
        console.log(`result: ${result}`)
    }, []);
    function toggle() {
        const modal = document.querySelector('.modal');
        const body = document.body;
        setIsOpen(!isOpen);
        body.classList.toggle('modal-active');
        modal?.classList.toggle('opacity-0');
        modal?.classList.toggle('pointer-events-none');
    }
    const onReset = (ev?: React.FormEvent) => {  
        ev?.preventDefault();
        const mapped = new Map();
        fieldInfo
            .map((info) => [info.name, info.defaultValue])
            .forEach(([k, v]) => mapped.set(k, v));
        setFormData(mapped);
    };
    const onSubmit = (ev: React.FormEvent) => {
        console.log(`in onSubmit`);
        console.log(formData);
        return handler(...setupSubmit(formData))
            .then((s) => {  
                onReset();
                toggle();
            })
            .catch((err) => {
                setFeedback(err.message);
            });
    };
    const onClick = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        console.log('onclick');
        console.log(`ev.currentTarget: ${ev.currentTarget}`);
        console.log(ev.target);
        if ((ev.target as HTMLButtonElement).dataset.toggle === 'modal') {
            onReset();
            toggle();
        }
    };
    return ReactDOM.createPortal(isOpen ?
        <div className="modal" onReset={onReset} onSubmit={onSubmit} onClick={onClick}>
            <header className="flex-row justify-center">
                <h3 className="block text-lg font-bold">{title}</h3>
            </header>
            <div className="flex-row">
                <div className="inline flex-grow-1">
                    <FontAwesomeIcon icon={icon} />
                </div>
                <div className="inline">
                    <form id={formID} ref={formRef} className="flex flex-column">
                        {children}
                        {feedback ? <div>feedback</div> : null}
                    </form>
                </div>
            </div>
            <ModalFooter form={formID}></ModalFooter>
        </div>
        : null, document.getElementById(constants.$modalRoot)!);
}
