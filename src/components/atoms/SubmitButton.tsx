import { ReactButtonProps } from '../../types/react/ReactButtonProps';

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
