import "./MovieCard.css"

// Props - a way to share info (send variables) from parent to child
// this component receives props
function MovieCard(props) {

    const {movie, deleteMovie} = props;

    return(
            <li className="movie-card">
                <h3>{movie.title}</h3>
                <img src={movie.img} alt="movie img" className="movie-img"/>
                <p>{movie.duration}</p>
                <button onClick={() => deleteMovie(movie)}> 🗑️</button>
            </li>

    )
}

export default MovieCard;