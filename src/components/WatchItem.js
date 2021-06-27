import React from 'react';
import Watched from "./buttons/Watched.js";
import Delete from "./buttons/Delete.js";

const WatchItem = (props) => {
    return (
        <li className="list-group-item">
            {props.movie}
            <Watched />
            <Delete />
        </li>
    );
};

export default WatchItem;