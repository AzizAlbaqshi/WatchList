import React from "react";
import WatchItem from "./WatchItem";
import movieStore from "../MovieStore";
import { observer } from "mobx-react";
import {useState} from "react";

const WatchList = (props) => {

  const [query, setQuery] = useState("");

  const movs = movieStore.movies
    .filter(movie => movie.watched === props.watched)
    .filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()))
    .map((movie) => <WatchItem movie={movie} />);

  return (
    <div className="watch-list">
        <h3>{props.watched? "Watched" : "Watchlist"}</h3>
        <div className="search-bar">
          <input onChange={(event) => setQuery(event.target.value)} placeholder="Search"/>
          <p>{movs.length} movie{movs.length>1? "s" : ""}</p>
        </div>
        <ul className="list-group list-group-flush">{movs}</ul>
    </div>

  );
};

export default observer(WatchList);
