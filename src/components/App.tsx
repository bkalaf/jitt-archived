import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';

export function Application() {
    return (
     <div></div>   
    )
}
// TODO Navbar
// TODO ActionsBar
// TODO CenterScreen
// TODO StatusBar
export default function App() {
    return (
        <div className="2xl:container">
            <div className="grid grid-co.0ls-1 auto-cols-max">
                <nav
                    className="flex bg-blue-800 px-3 py-3 rounded-lg items-around "
                    role="navigation">
                    <div className="flex justify-start items-center">
                        <a className="inline-flex mr-2 text-steel-300 font-extrabold text-2xl text-center" href="/" type="button">
                            <FontAwesomeIcon
                                icon={faHome}
                                size={'lg'}
                                className="dark:box-border mx-2"
                            />
                            <span>JITT</span>
                        </a>
                        <button
                            type="button"
                            data-toggle="menu"
                            data-target="navbarMenu"
                            className="bg-gray-800 inline-flex items-center justify-center 
                            p-2 rounded-md text-gray-400 ">
                            <FontAwesomeIcon size={'2x'} icon={faBars}></FontAwesomeIcon>
                            <span className="sr-only">Navigation Toggler</span>
                        </button>

                        <ol className="pl-4 inline content-evenly flex-row">
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
                    <button type="button" className="bg-amber-500 m-1 rounded p-2 font-medium">
                        Click Me
                    </button>
                </div>
                <div>2</div>
                <div>3</div>
            </div>
        </div>
    );
}
