import { ReactHeaderProps } from '../../types/react/ReactButtonProps';
import { mergeCN } from '../mergeCN';

const $modalHeader = 'modal-header';

export function ModalHeader(props: { title: string } & ReactHeaderProps) {
    const { title, className, ...spread } = props;
    return (
        <header
            className={mergeCN(
                className ?? '',
                $modalHeader,
                'flex justify-center m-2 text-2xl font-sans font-semibold rounded-lg'
            )}>
            <h1 className="inline-block">{title}</h1>
        </header>
    );
}
