import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function MovieListItem({movie}) {

    const history = useHistory();
    const dispatch = useDispatch();

    return (
        <div className="MovieItem">
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title} onClick={() => {
                dispatch({ type: 'GET_DETAILS', payload: movie.id });
                setTimeout(function(){ history.push('/details'); }, 200);
                }}/>
        </div>
    );
}

export default MovieListItem;