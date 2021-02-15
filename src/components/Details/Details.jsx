import { useSelector } from 'react-redux';

function Details() {

    const genres = useSelector(store => store.genres);
    console.log(genres);

    return (
        <div>
            <h1>{genres[0].title}</h1>
            <img src={genres[0].poster} alt={genres[0].title}/>
            <h4>{genres[0].description}</h4>
        </div>
    );
}


export default Details;
