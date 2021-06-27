import React from 'react';
import WatchItem from './WatchItem';

const WatchList = (props) => {
    const movies = props.movies.map(movie => (<WatchItem movie={movie}/>))

    return (
        <div>
        <div className="watchList">
            <input />
            <ul className="list-group">
                {movies}
            </ul>
        </div>
            

        </div>
    );
};

export default WatchList;
