import React from 'react';
import {useAppSelector} from "../hooks/redux";
import {Link} from "react-router-dom";

export const FavouritesPage = () => {
    const {favourites} = useAppSelector(state => state.github)

    if (!favourites.length) return <p className='text-center'>No favourite repos</p>

    return (
        <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
            <ul className='list-none'>
                {favourites.map(f =>
                    <li key={f}>
                        <Link to={f} target='_blank'>{f}</Link>
                    </li>
                )}
            </ul>
        </div>
    );
};
