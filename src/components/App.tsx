import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

/**@deprecated */
export function Application() {
    return (
     <div></div>   
    )
}
// TODO Navbar
// TODO ActionsBar
// TODO CenterScreen
// TODO StatusBar
/**@deprecated */
export default function App() {
    return (
        <div className="2xl:container">
            <div className="grid grid-co.0ls-1 auto-cols-max">
                <nav
                    className="flex px-3 py-3 bg-blue-800 rounded-lg items-around "
                    role="navigation">
                    <div className="flex items-center justify-start">
                        <a className="inline-flex mr-2 text-2xl font-extrabold text-center text-steel-300" href="/" type="button">
                            <FontAwesomeIcon
                                icon={faHome}
                                size={'lg'}
                                className="mx-2 dark:box-border"
                            />
                            <span>JITT</span>
                        </a>
                        <button
                            type="button"
                            data-toggle="menu"
                            data-target="navbarMenu"
                            className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md ">
                            <FontAwesomeIcon size={'2x'} icon={faBars}></FontAwesomeIcon>
                            <span className="sr-only">Navigation Toggler</span>
                        </button>

                        <ol className="flex-row inline pl-4 content-evenly">
                            <li className="flex p-3"><NavLink activeStyle={{ fontWeight: 'bolder', color: 'gold' }} exact to="/">Home</NavLink></li>
                            <li className="flex p-3"><NavLink activeStyle={{ fontWeight: 'bolder', color: 'gold' }} exact to="/auctions">Auctions</NavLink></li>
                            <li className="flex p-3"><NavLink activeStyle={{ fontWeight: 'bolder', color: 'gold' }} exact to="/products">Products</NavLink></li>
                        </ol>
                    </div>
                    <div className="flex justify-end"></div>
                </nav>
            </div>
            <div className="grid grid-cols-3">
                <div>
                    <button type="button" className="p-2 m-1 font-medium rounded bg-amber-500">
                        Click Me
                    </button>
                </div>
                <div>2</div>
                <div>3</div>
            </div>
        </div>
    );
}
