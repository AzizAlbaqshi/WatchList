import React from "react";
import WatchItem from "./WatchItem";
import movieStore from "../MovieStore";
import { observer } from "mobx-react";

const WatchList = (props) => {
  const movs = movieStore.movies
    .filter(movie => movie.watched === props.watched)
    .map((movie) => <WatchItem movie={movie} />);

  return (
    <div className="watch-list">
        <h3>{props.watched? "Watched" : "Watchlist"}</h3>
        <div className="search-bar">
          <input placeholder="Search"/>
        </div>
        <ul className="list-group list-group-flush">{movs}</ul>
    </div>

  );
};

export default observer(WatchList);
