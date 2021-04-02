import React from 'react';
import { OnClickFunction } from '../OnClickFunction';
import { ReactButtonProps } from '../ReactButtonProps';

export type SubmitButtonProps = {
    form: string;
    // onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export function FormSubmitButton(props: SubmitButtonProps & ReactButtonProps) {
    const { form, ...spread } = props;
    return (
        <button form={form} type="submit" {...spread}>
            Submit
        </button>
    );
}
