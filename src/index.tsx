import ReactDOM from 'react-dom';
import './styles/styles.css';
import constants from './constants';
import { SignInModalButton } from './components/SignInModal';

function AppRoot2() {
    return (
        <SignInModalButton />
    );
}
ReactDOM.render(<AppRoot2 />, document.getElementById(constants.$appRoot));
