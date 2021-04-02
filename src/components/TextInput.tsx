import React from 'react';

import { camelCase } from './camelCase';
import { capitalize } from './capitalize';
import { mergeCN } from './mergeCN';

/**@deprecated */
export function TextInput<T extends { [k: string]: string }>(
    props: {
        required: boolean;
        type: string;
        name: string;
        formData: T;
        setFormData: React.Dispatch<React.SetStateAction<T>>;
    } & { className?: string }
) {
    const { name, formData, setFormData, className, ...spread } = props;
    const id = `${name.toLowerCase().replace(' ', '-')}-input`;
    const varName = camelCase(name);
    return (
        <div className="flex-row">
            <label className={mergeCN('inline-flow', className ?? '')} htmlFor={id}>
                {capitalize(name)}
            </label>
            <input
                className={mergeCN('inline-flow', className ?? '')}
                id={id}
                name={varName}
                value={formData[name]}
                onChange={(ev) => {
                    setFormData({ ...formData, [varName]: ev.target.value });
                }}
                {...spread}></input>
        </div>
    );
}
