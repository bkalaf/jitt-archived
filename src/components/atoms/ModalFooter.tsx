import React from 'react';
import { DataToggleButton, CancelButtonProps } from './DataToggleButton';
import { composeR } from '../composeR';
import { FormResetButton } from './ResetButton';
import { FormSubmitButton, SubmitButtonProps } from './SubmitButton';
import { convertVoid } from '../convertVoid';
import { RecordWithTtl } from 'node:dns';

export type ModalFooterProps = {
    form: string;
};

export interface IFieldInfo<T> {
    name: string;
    defaultValue: T;
    type: string;
}
export function ModalFooter(props: ModalFooterProps) {
    const { form, ...spread } = props;
    return (
        <footer className="flex flex-row justify-center divide-x-4" {...spread}>
            <DataToggleButton dataToggle="modal" className="btn btn-blue" />
            <FormResetButton form={form} className="btn btn-blue" />
            <FormSubmitButton className="btn btn-blue" form={form} />
        </footer>
    );
}
