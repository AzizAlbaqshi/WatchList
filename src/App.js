import "./App.css";
import WatchList from "./components/WatchList";

function App() {

  return (
    <div>
      <WatchList watched={false}/>
      <WatchList watched={true}/>
      
    </div>
  );
}

export default App;
