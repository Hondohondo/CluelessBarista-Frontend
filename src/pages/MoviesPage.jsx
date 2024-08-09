import HeaderComponent from "../components/HeaderComponent.jsx";
import MovieList from "../components/MovieList.jsx";
import {useState} from "react";

function MoviesPage() {

    const [showMovies, setShowMovies] = useState(true);

    return (
        <>
            <HeaderComponent />
            <div>Movies Page</div>

            <button onClick={() => setShowMovies(!showMovies)}>Toggle Movies</button>
            {showMovies && <MovieList/>}
        </>
)
}


export default MoviesPage;