import movieStore from "../MovieStore";
import {useState} from "react";

const AddMovie = () => {
  
  const [movie, setMovie] = useState({
    id: 0,
    title: "",
    watched: false,
  });

  const handleAddition = () => {
    movieStore.createMovie(movie);
  };

  const handleChange = (event) => {
    setMovie({...movie, ["title"]: event.target.value})
  }

  return (
    <div>
      <input onChange={handleChange}className="Add" placeholder="Add new Movie" />
      <button className="btn btn-primary" onClick={handleAddition}>
        Add
      </button>
    </div>
  );
};

export default AddMovie;
