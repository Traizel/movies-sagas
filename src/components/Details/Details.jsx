import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Details() {

    const history = useHistory();
    const genres = useSelector(store => store.genres);
    console.log(genres);

    return (
        <div key={genres[0].id}>
            <h1>{genres[0].title}</h1>
            <img src={genres[0].poster} alt={genres[0].title}/>
            <h4>{genres[0].description}</h4>
            <h3>Genres:</h3>
            {genres.map(genre => {
                return (
                    <h4>- {genre.name}</h4>
                );
                })}
            <button onClick={() => {history.push('/')}}>Back to List</button>
        </div>
    );
}


export default Details;
