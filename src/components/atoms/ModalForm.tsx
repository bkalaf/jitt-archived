import React from 'react';
import { ReactFormProps } from '../ReactButtonProps';

export function ModalForm<T extends { [key: string]: string; }>(
    props: {
        formData: T;
        setFormData: React.Dispatch<React.SetStateAction<T>>;
        feedback: string | undefined;
        id: string
    } & ReactFormProps) {
    const { id, formData, setFormData, feedback, ...spread } = props;
    return (
        <section>
            <form id={id} className="flex items-center gap-y-0" {...spread}></form>
            {feedback ? <div className="flex">{feedback}</div> : null}
        </section>
    );
}
