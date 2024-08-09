import MovieCard from "./MovieCard.jsx";
import "./MovieList.css";

import dramaImg from "../assets/drama.jpg";
import thrillerImg from "../assets/thriller.jpg";
import horrorImg from "../assets/horror.jpg";
import crimeImg from "../assets/crime.jpg";
import {useEffect, useState} from "react";
import CreateMovie from "./CreateMovie.jsx";

function MovieList() {

    useEffect(() => {
        console.log("Movie List mounted");
    }, []);

    const movieData = [
        {
            title: "Drama Movie",
            duration: 200,
            img: dramaImg
        },
        {
            title: "Thriller Movie",
            duration: 120,
            img: thrillerImg

        },
        {
            title: "Horror Movie",
            duration: 150,
            img: horrorImg
        },
        {
            title: "Crime Movie",
            duration: 100,
            img: crimeImg
        },
    ];

    //to create reactive variables (state variables) - we need the variable and the setter.
    //we cant modify a react variable directly, we have to use its setter
    const [movies, setMovies] = useState(movieData);

    const deleteMovie = (movieToDelete) =>{
        //we are going to create an array that contains every movie but the movie to delete
        const filteredMovies = movies.filter(
            movie => movie.title !== movieToDelete.title
        );
        //now we have the filtered movie we can set the variable to the new array
        setMovies(filteredMovies);
    }

    const createMovie = (newMovie) =>{
        //add new movie at the end
        setMovies([...movies, newMovie]);
    }

    // cb - call back
    // useEffect(cb, [movies])

  /*  useEffect(() => {
        console.log("Movie list mounted");
    }, [])*/

    useEffect(() => {
        console.log("Movie state variable updated");
    }, [movies])

    //we can inject some code when a component is unmounted
    useEffect(() => {
        return () => {
            console.log("Movie List component unmounted");
        }
        // console.log("Movie state variable updated");
    }, [movies])

/*    useEffect(() => {
        console.log("Movie state variable updated");
    }, [movies])*/

    const movieCards = movies.map((movie) => {
        return (
            <MovieCard
                //prop and {function}
                movie={movie}
                deleteMovie={deleteMovie}
                key={movie.title}
            />

        /*    <article>
                <h2>{movie.title}</h2>
                <h2>{movie.duration}</h2>
            </article>*/
        )
    })

/*    const deleteLastMovie = () =>{
        const moviesCopy = movies.map((movie) => movie); //create a copy of original array

        //other way to create an array copy
        // const moviesCopy = [...movies];

        moviesCopy.pop();
        setMovies(moviesCopy);
    }*/


    return (
       <section className="movies-section">
           {/*create movie component is receiving a prop*/}
           <CreateMovie createMovie={createMovie} />
           <h2>Movies:</h2>
           <ul className="movie-list">
            {/*   <li className="movie-card">
                   <h3>{movies[0].title}</h3>
                   <p>{movies[0].duration}</p>
               </li>
               <li className="movie-card">
                   <h3>{movies[1].title}</h3>
                   <p>{movies[1].duration}</p>
               </li>*/}
            {/*   <MovieCard movie={movies[0]} />
               <MovieCard movie={movies[1]} />
               <MovieCard movie={movies[2]} />
               <MovieCard movie={movies[3]} />*/}
               {movieCards}
           </ul>
           {/*<button onClick={deleteLastMovie}>Delete last movie</button>*/}

       </section>
    )
}

export default MovieList;