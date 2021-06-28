import movieStore from "../MovieStore";

const AddMovie = () => {
  const handleAddition = () => {
    movieStore.createMovie();
  };

  return (
    <div>
      <input className="Add" placeholder="Add new Movie" />
      <button className="btn btn-primary" onClick={handleAddition}>
        Add
      </button>
    </div>
  );
};

export default AddMovie;
