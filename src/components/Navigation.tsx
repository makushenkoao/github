import React from 'react';
import {Link} from "react-router-dom";

export const Navigation = () => {
    return (
        <nav className='flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500'>
            <h3 className='font-bold'>Github search</h3>
            <span>
                <Link to='/' className='mr-2 hover:text-gray-400'>Home</Link>
                <Link to='/favourites' className='hover:text-gray-400'>Favourites</Link>
            </span>
        </nav>
    );
};
