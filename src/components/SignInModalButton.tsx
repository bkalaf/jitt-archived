import { faUserNinja } from '@fortawesome/free-solid-svg-icons';
import React, { MouseEvent } from 'react';

import FirebaseContext from '../db';
import { ModalBody } from './atoms/ModalBody';

/**@deprecated */
export function RegisterModalButton() {
    const { app } = React.useContext(FirebaseContext);
    const [modalOpen, setOpen] = React.useState(false);
    const formDataDefault = { email: '', password: '', verifyPassword: '' };
    const [formData, setFormData] = React.useState<{ [key: string]: string }>(formDataDefault);
    const [feedback, setFeedback] = React.useState<string | undefined>(undefined);
    const click = (ev: MouseEvent) => {
        console.log('onclick');
        setFeedback(undefined);
        ev.preventDefault();
        if (formData.password.length < 8) {
            console.log('validation failed');
            const form: HTMLFormElement | null = document.getElementById(
                'register-form'
            ) as HTMLFormElement | null;
            const input = form?.querySelector('#password-input') as HTMLInputElement | null;
            input?.setCustomValidity('password must be at least 8 characters.');
            setFeedback('password must be at least 8 characters.');
            return;
        }
        if (formData.password !== formData.verifyPassword) {
            const form: HTMLFormElement | null = document.getElementById(
                'register-form'
            ) as HTMLFormElement | null;
            const input = form?.querySelector('#password-input') as HTMLInputElement | null;
            input?.setCustomValidity('Passwords must match!');
            setFeedback('Passwords must match!');
            return;
        }
        // try {
        //     app.functions().httpsCallable('writeCred')({
        //         email: formData.email,
        //         password: formData.password,
        //     });
        // } catch (error) {
        //     console.log(error);
        // }
        app.auth()
            .createUserWithEmailAndPassword(formData.email, formData.password)
            .then((cred) => {
                console.log(cred);
                alert(`WELCOME to JITT, ${cred.user?.email}`);
                toggle();
            })
            .catch((err: firebase.default.auth.AuthError) => {
                setFeedback(err.message);
            });
    };
    function toggle() {
        const modal = document.querySelector('.modal');
        const body = document.body;
        setOpen(!modalOpen);
        body.classList.toggle('modal-active');
        modal?.classList.toggle('opacity-0');
        modal?.classList.toggle('pointer-events-none');
    }
    return (
        <React.Fragment>
            <button
                className="px-4 py-2 font-bold bg-transparent border rounded-full primary-theme modal-open hover:border-indigo-500 hover:text-indigo-500"
                onClick={toggle}>
                Register
            </button>
            {/* <Modal
            title="REGISTER @ JITT"
                name="register"
                toggle={toggle}
                feedback={feedback}
                setFormData={setFormData}
                formData={formData}
                formDataDefault={formDataDefault}
                theme="primary-theme"
                iconSize="8x"
                icon={faPenAlt}
                resetFeedback={() => setFeedback(undefined)}
                shown={modalOpen}
                rootId="modal-root"
                forClick={click}>
                <TextInput
                    required
                    name="email"
                    type="email"
                    formData={formData}
                    setFormData={setFormData}
                />
                <TextInput
                    required
                    name="password"
                    type="password"
                    formData={formData}
                    setFormData={setFormData}
                />

                <TextInput
                    required
                    name="verify password"
                    type="password"
                    formData={formData}
                    setFormData={setFormData}
                />
            </Modal> */}
        </React.Fragment>
    );
}
export function SignInModalButton() {
    const { app } = React.useContext(FirebaseContext);
    const [modalOpen, setOpen] = React.useState(false);
    const formDataDefault = { email: '', password: '' };
    const [formData, setFormData] = React.useState(formDataDefault);
    const [feedback, setFeedback] = React.useState<string | undefined>(undefined);
    const onClick = (ev: MouseEvent) => {
        console.log('onclick');
        ev.preventDefault();
        app.auth()
            .signInWithEmailAndPassword(formData.email, formData.password)
            .then((result) => {
                alert(`Welcome: ${result.additionalUserInfo?.username ?? result.user?.email}`);
                toggle();
            })
            .catch((err: firebase.default.auth.AuthError) => {
                setFeedback(err.message);
            });
    };
    function toggle() {
        const modal = document.querySelector('.modal');
        const body = document.body;
        setOpen(!modalOpen);
        body.classList.toggle('modal-active');
        modal?.classList.toggle('opacity-0');
        modal?.classList.toggle('pointer-events-none');
    }
    return (
        <React.Fragment>
            <button
                className="px-4 py-2 font-bold text-gray-500 bg-transparent border border-gray-500 rounded-full modal-open hover:border-indigo-500 hover:text-indigo-500"
                onClick={toggle}>
                Login
            </button>
            {/* <Modal
                name="login"
                title="LOGIN to JITT"
                formData={formData}
                setFormData={setFormData}
                formDataDefault={{ email: '', password: '' }}
                rootId="modal-root"
                iconSize="6x"
                icon={faUserNinja}
                feedback={feedback}
                theme="primary-theme"
                forClick={onClick}
                toggle={toggle}
                shown={modalOpen}
                resetFeedback={() => setFeedback(undefined)}>
                <TextInput
                    required
                    name="email"
                    formData={formData}
                    setFormData={setFormData}
                    type="email"></TextInput>
                <TextInput
                    required
                    name="password"
                    formData={formData}
                    setFormData={setFormData}
                    type="password"></TextInput>
            </Modal> */}
        </React.Fragment>
    );
}

/**
 * 
 * @deprecated
 */
export function LoginButton() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [formData, setFormData] = React.useState<Map<string, string>>(new Map());
    function toggle() {
        const modal = document.querySelector('.modal');
        const body = document.body;
        setIsOpen(!isOpen);
        body.classList.toggle('modal-active');
        modal?.classList.toggle('opacity-0');
        modal?.classList.toggle('pointer-events-none');
    }
    const { app } = React.useContext(FirebaseContext);
    return (
        <React.Fragment>
            <button type="button" onClick={toggle}>
                Login
            </button>
            <ModalBody
                icon={faUserNinja}
                name="login"
                formID="login-form"
                formData={formData}
                setFormData={setFormData}
                title="Log in to JITT!"
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                handler={(email, password) => app.auth().signInWithEmailAndPassword(email, password)}
                setupSubmit={(m) => [m.get('email') ?? '', m.get('password') ?? '']}>
                <label htmlFor="email-input">Email</label>
                <input
                    value={formData.get('email')}
                    type="email"
                    name="email"
                    id="email-input"
                    onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                        setFormData(formData.set('email', ev.target.value));
                    }}></input>
                <label htmlFor="password-input">Password</label>
                <input
                    value={formData.get('password')}
                    type="password"
                    name="password"
                    id="password-input"
                    onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                        setFormData(formData.set('password', ev.target.value));
                    }}></input>
                {/* <TextInput
                    required
                    name="email"
                    formData={formData}
                    setFormData={setFormData}
                    type="email"></TextInput>
                <TextInput
                    required
                    name="password"
                    formData={formData}
                    setFormData={setFormData}
                    type="password"></TextInput> */}
            </ModalBody>
        </React.Fragment>
    );
}
