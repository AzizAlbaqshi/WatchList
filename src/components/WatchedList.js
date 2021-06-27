import WatchItem from "./WatchItem";

const WatchedList = (props) => {
  const movies = props.movies.map((movie) => <WatchItem movie={movie.title} />);

  return (
    <div>
      <div className="watchList">
        <input />
        <ul className="list-group">{movies}</ul>
      </div>
    </div>
  );
};

export default WatchedList;
