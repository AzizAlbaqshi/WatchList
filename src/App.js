import "./App.css";
import AddMovie from "./components/AddMovie";
import WatchList from "./components/WatchList";

function App() {
  return (
    <div>
      <AddMovie />
      <WatchList watched={false} />
      <WatchList watched={true} />
    </div>
  );
}

export default App;
