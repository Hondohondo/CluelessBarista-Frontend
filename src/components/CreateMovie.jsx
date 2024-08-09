import {useState} from "react";

function createMovie(props) {

    //we are receiving this function(createMovie) from its parent component
    const {createMovie} = props;

    //we have a title whose initial value is an empty string
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [duration, setDuration] = useState(0);

    const handleTitleInput = (e) => {

        // console.log("title has been changed");
        // console.log(e.target.value);

        //change the title variable to a new value via setter
        setTitle(e.target.value);
    }
    const handleImageInput = (e) => {
        // console.log(e.target.value);

        setImage(e.target.value);
    }
    const handleDurationInput = (e) => {
        // console.log(e.target.value);

        setDuration(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Create Movie");
        // console.log(title, image, duration);
        const movie = {
            //if the properties have the same name as variables, you can also write just properties e.g title, img, duration
            title: title,
            img: image,
            duration: duration,
        }
        console.log(movie);

      /*  if(!title) return;
        OR
        if(!title) {
            console.log("Title is required");
            return;
        }*/

        createMovie(movie);

        setDuration(0);
        setTitle("");
        setImage("");
    }

    return (
        <form onSubmit={handleSubmit}>
            {/*{title}*/}
            <fieldset>
                <label htmlFor="movie-title">Movie Title: </label>
                <input
                    type="text"
                    id="movie-title"
                    onChange={handleTitleInput}
                    value={title}
                />
            </fieldset>
            <fieldset>
                <label htmlFor="movie-image">Movie Image: </label>
                <input
                    type="text"
                    id="movie-image"
                    onChange={handleImageInput}
                    value={image}
                />
            </fieldset>
            <fieldset>
                <label htmlFor="movie-duration">Movie Duration: </label>
                <input
                    type="number"
                    id="movie-duration"
                    onChange={handleDurationInput}
                    value={duration}
                />
            </fieldset>

            <button>Create Movie</button>
        </form>
    )
}

export default createMovie