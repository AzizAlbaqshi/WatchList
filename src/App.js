import "./App.css";
import WatchList from "./components/WatchList";
import WatchedList from "./components/WatchedList";
import movies from "./movies.js";

function App() {
  const WatchMovies = [];
  const WatchedMovies = [];

  movies.forEach((movie) => {
    movie.watched ? WatchedMovies.push(movie) : WatchMovies.push(movie);
  });
  return (
    <div className="Wrapper">
      <WatchList movies={WatchMovies} />
      <WatchedList movies={WatchedMovies} />
    </div>
  );
}

export default App;
