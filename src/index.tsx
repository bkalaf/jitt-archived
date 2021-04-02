import './styles/styles.css';

import firebase from 'firebase';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import constants from './constants';
import FirebaseContext, { app } from './db';

interface LogEntry {
    msg: string;
    calledFrom: string;
}
interface ILogger {
    (msg: string): void;
    addListener(listener: (entry: LogEntry) => void): void;
}

function CurrentUser() {
    const { app } = React.useContext(FirebaseContext);
    const [currentUser, setCurrentUser] = React.useState<firebase.User | null>(app.auth().currentUser);
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
            </FirebaseContext.Provider>
        </BrowserRouter>
    );
}
ReactDOM.render(<AppRoot2 />, document.getElementById(constants.$appRoot));
