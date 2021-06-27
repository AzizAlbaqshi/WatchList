import './App.css';
import WatchList from './components/WatchList';
import movies from "./movies.js";

function App() {
  return (
    <div>
      <WatchList movies={movies}/>
      
    </div>
  )
}

export default App;
