import React from 'react';
import WatchButton from "./buttons/WatchButton.js";
import DeleteButton from "./buttons/DeleteButton.js";

const WatchItem = (props) => {
    const movie = props.movie

    return (
        <li className="list-group-item">
            {movie.title}
            <WatchButton watched={movie.watched}/>
            <DeleteButton movieID={movie.id}/>
        </li>
    );
};

export default WatchItem;