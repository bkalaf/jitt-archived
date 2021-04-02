import React from 'react';
import { ReactButtonProps } from '../../types/react/ReactButtonProps';

export type CancelButtonProps = {
    dataToggle: string;
};

export function DataToggleButton(props: CancelButtonProps & ReactButtonProps) {
    const { dataToggle, children, ...spread } = props;
    return (
        <button data-toggle={dataToggle} type="button" {...spread}>
            {children ? children : 'Cancel'}
        </button>
    );
}
