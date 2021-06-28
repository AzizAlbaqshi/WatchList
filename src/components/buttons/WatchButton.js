import React from "react";
import movieStore from '../../MovieStore';

const WatchButton = (props) => {

  const handleWatched = () => {
    movieStore.setWatched(props.movie.id)
  }

  return <button onClick={handleWatched} className="btn btn-primary mx-2">{props.movie.watched? "Unwatch" : "Watched"}</button>;
};

export default WatchButton;
