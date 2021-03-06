import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ReactDivProps from '../../types/react/ReactDivProps';

export function ModalImage(props: { icon: IconDefinition; size: SizeProp } & ReactDivProps) {
    const { icon, size, className, ...spread } = props;
    return (
        <FontAwesomeIcon
                icon={icon}
                size={"9x"}
                className={className}
            />
        // <div className="flex items-center justify-center col-span-2">
            
        // </div>
    );
}
