import React from 'react';
import movieStore from '../../MovieStore';

const DeleteButton = (props) => {
    
    const handleDelete = () => {
        movieStore.deleteMovie(props.movieID)
    }

    return (
        <button onClick={handleDelete} className="btn btn-danger">Delete</button>
    );
};

export default DeleteButton;