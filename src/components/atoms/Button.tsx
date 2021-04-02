import ReactButtonProps from '../../types/react/ReactButtonProps';

export function Button(props: ReactButtonProps) {
    props.className += " uppercase leading-tight p-2 m-1 rounded shadow-lg focus:outline-none focus:ring focus:ring-offset-2";
    return <button {...props}></button> 
}

const SubmitButton = (props: Omit<ReactButtonProps, "type">) => {
    return <Button {...props} type="submit"></Button>
}