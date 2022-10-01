import React from 'react';

const NavLink = ({navList}) => {
    const {name} = navList;
    return (
        <li className="mr-4">
            <a className="text-lg font-medium" href="/">{name}</a>
        </li>
    );
};

export default NavLink;