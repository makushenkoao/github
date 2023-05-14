import React, {useState} from 'react';
import {IRepo} from "../models/models";
import {Link} from "react-router-dom";
import {useActions} from "../hooks/actions";
import {useAppSelector} from "../hooks/redux";

export const RepoCard = ({repo}: {repo: IRepo}) => {
    const {full_name, description, forks, watchers, html_url} = repo
    const {addFavourite, removeFavourite} = useActions()
    const {favourites} = useAppSelector(state => state.github)

    const [isFav, setIsFav] = useState(favourites.includes(html_url))


    const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        addFavourite(html_url)
        setIsFav(true)
    }

    const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        removeFavourite(html_url)
        setIsFav(false)
    }

    return (
        <div className='border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all'>
            <Link to={html_url} target='_blank'>
                <h2 className='text-lg font-bold'>{full_name}</h2>
                <p className='text-sm'>
                    Forks: <span className='font-bold mr-2'>{forks}</span>
                    Watchers: <span className='font-bold'>{watchers}</span>
                </p>
                <p className='text-sm font-thin'>{description && description}</p>
                {isFav
                    ?
                    <button className='py-2 px-4 text-red-400 rounded hover:shadow-md transition-all' onClick={removeFromFavourite}>
                        Remove from favourite
                    </button>
                    :
                    <button className='py-2 px-4  mr-2 bg-yellow-400 rounded hover:shadow-md transition-all' onClick={addToFavourite}>
                    Add to favourite
                    </button>
                }
            </Link>
        </div>
    );
};
