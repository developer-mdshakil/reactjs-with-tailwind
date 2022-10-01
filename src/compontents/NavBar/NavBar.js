import React from 'react';
import NavLink from '../NavLink/NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const NavBar = () => {

    const [open, setOpen] = useState(false);

    const navBars = [
        {id: 1, name: 'Home', path: '/Home'},
        {id: 2, name: 'Products', path: '/Products'},
        {id: 3, name: 'Orders', path: '/Orders'},
        {id: 4, name: 'Sign Up', path: '/Sign Up'},
        {id: 5, name: 'About', path: '/About'},
        {id: 6, name: 'Contact Us', path: '/Contact Us'},
    ]
    return (
        <nav className="w-full bg-black lg:bg-blue-500 py-2">
            <div onClick={() => setOpen(!open)} className="text-3xl h-6 w-6 text-white font-semibold md:hidden ">
            {
                open ? <XMarkIcon/> : <Bars3Icon/>
            }
            </div>

            <ul className={`md:flex bg-black md:bg-inherit w-full text-white p-6 lg:p-0 justify-center absolute duration-700 ease-in md:static ${open ? 'right-0':'right-[-1240px]'}`}>
                {
                    navBars.map(nav => <NavLink 
                            key={nav.id} navList={nav}
                     ></NavLink>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;