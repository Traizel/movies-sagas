import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { createPopper } from '@popperjs/core';


function AddMovie() {
    
    const [newTitle, setNewTitle] = useState('');
    const [newURL, setNewURL] = useState('');
    const [newDesc, setNewDesc] = useState('');
    const [newGenre, setNewGenre] = useState(0);
    const history = useHistory();
    const dispatch = useDispatch();
    const popcorn = document.querySelector('#popcorn');
    const tooltip = document.querySelector('#tooltip');

    createPopper(popcorn, tooltip, {
        placement: 'right-end',
    });

    const handleSubmit = (event) => {
        // Don't reload on form submit
        event.preventDefault();

        // Tell redux that we want to add the new element
        dispatch({
            type: 'ADD_MOVIE',
            // Pass in the element name, that we're tracking in state
            payload: {
                description: newDesc,
                title: newTitle,
                poster: newURL,
                genre_id: newGenre,
            }
        });

        // Clear the form field
        setNewTitle('');
        setNewURL('');
        setNewDesc('');
        history.push('/');
    };

    return (
        <div>
            <h1>Add a Movie:</h1>
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                <input
                    type="text"
                    placeholder="Movie Title"
                    value={newTitle}
                    onChange={e => setNewTitle(e.target.value)} />
                <input
                    type="text"
                    placeholder="Movie URL"
                    value={newURL}
                    onChange={e => setNewURL(e.target.value)} />
                <input
                    type="text"
                    placeholder="Movie Description"
                    value={newDesc}
                    onChange={e => setNewDesc(e.target.value)} />
                <div className="dropdown">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                        Dropdown button
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" onClick={() => { setNewGenre(1) }}>Adventure</a>
                        <a className="dropdown-item" onClick={() => { setNewGenre(2) }}>Animated</a>
                        <a className="dropdown-item" onClick={() => { setNewGenre(3) }}>Biographical</a>
                        <a className="dropdown-item" onClick={() => { setNewGenre(4) }}>Comedy</a>
                        <a className="dropdown-item" onClick={() => { setNewGenre(5) }}>Disaster</a>
                        <a className="dropdown-item" onClick={() => { setNewGenre(6) }}>Drama</a>
                        <a className="dropdown-item" onClick={() => { setNewGenre(7) }}>Epic</a>
                        <a className="dropdown-item" onClick={() => { setNewGenre(8) }}>Fantasy</a>
                        <a className="dropdown-item" onClick={() => { setNewGenre(9) }}>Musical</a>
                        <a className="dropdown-item" onClick={() => { setNewGenre(10) }}>Romantic</a>
                        <a className="dropdown-item" onClick={() => { setNewGenre(11) }}>Science Fiction</a>
                        <a className="dropdown-item" onClick={() => { setNewGenre(12) }}>Space-Opera</a>
                        <a className="dropdown-item" onClick={() => { setNewGenre(13) }}>Superhero</a>
                    </div>
                </div>
                </div>
                <button type="submit">Add!</button>
            </form>
            <button onClick={() => { history.push('/') }}>Back to List</button>
        </div>
    );
}

export default AddMovie;