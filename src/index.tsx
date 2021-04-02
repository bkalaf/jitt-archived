import ReactDOM from 'react-dom';
import './styles/styles.css';
import constants from './constants';
import { LoginButton } from './components/SignInModalButton';
import { BrowserRouter } from 'react-router-dom';
import FirebaseContext, { app } from './db';
import React from 'react';
import firebase from 'firebase';

function CurrentUser() {
    const { app } = React.useContext(FirebaseContext);
    const [currentUser, setCurrentUser] = React.useState<firebase.User | null>(app.auth().currentUser);
    console.log(currentUser);
    React.useEffect(() => {
        return app.auth().onAuthStateChanged(user => {
            console.log(user);
            setCurrentUser(user);
        });        
    }, [])
    return <div>{app.auth().currentUser?.email}</div>
}
function AppRoot2() {
    
    return (
        <BrowserRouter>
            <FirebaseContext.Provider value={{ app }}>
                <CurrentUser/>
                <LoginButton />
            </FirebaseContext.Provider>
        </BrowserRouter>
    );
}
ReactDOM.render(<AppRoot2 />, document.getElementById(constants.$appRoot));
