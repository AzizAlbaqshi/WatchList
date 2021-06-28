import React from 'react';
import WatchButton from "./buttons/WatchButton.js";
import DeleteButton from "./buttons/DeleteButton.js";
import { observer } from "mobx-react";

const WatchItem = (props) => {
    const movie = props.movie

    return (
        <li className="list-group-item">
            {movie.title}
            <WatchButton movie={movie} />
            <DeleteButton movieID={movie.id} />
        </li>
    );
};

export default observer(WatchItem);