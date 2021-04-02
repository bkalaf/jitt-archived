import React from 'react';
import { ReactButtonProps } from '../../types/react/ReactButtonProps';

export type ResetButtonProps<T> = {
    form: string;
};

export function FormResetButton<T>(props: ResetButtonProps<T> & ReactButtonProps) {
    const { form, ...spread } = props;
    return (
        <button
            form={form}
            type="reset"
            {...spread}>
            Reset
        </button>
    );
}
