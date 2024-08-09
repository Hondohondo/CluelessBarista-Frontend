
import './App.css'
import HeaderComponent from "./components/HeaderComponent.jsx";
import MovieList from "./components/MovieList.jsx";
import {useState} from "react";
import Blog from "./components/Blog.jsx";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import MoviesPage from "./pages/MoviesPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import PostDetails from "./pages/PostDetails.jsx";
import CoffeesPage from "./pages/CoffeesPage.jsx";
import CoffeeDetails from "./pages/CoffeeDetails.jsx";
import OrderPage from "./pages/OrderPage.jsx";

function App() {
   /* let title = "This is my React project";
    // let counter = 0;
    // console.log(title);

    //to create counter as a reactive variable. we need a setter to modify the variable
    //const array the name of variable and setter
    const [counter, setCounter] = useState(0);
    //every component has a state. A state is a way of handling the global values of a component. A state is a storage of variables that are important to all elements in a website. The state is responsible to render a component if it changes.
    //the way to differentiate normal variables and state variables

    //you can't modify the reactive variable directly, you need a setter.

  /!*  const handleClick = () => {
        console.log("Title clicked");
    }*!/
    const handleClick = (e) => {
        console.log(e);
        console.log("Title clicked");
    }

    const increaseCounter = () => {
        // counter++; //can't modify counter directly in React
        // console.log(counter);
        setCounter(counter + 1); //now we have a reactive variable and we can modify it
    }

    //a normal variable
    // const condition = false;

    //a reactive variable
    const [condition, setCondition] = useState(true);
    const [showMovies, setShowMovies] = useState(true);*/

 /* return (
      <>
          <HeaderComponent />
          <main className="main">

              <Blog />

              {condition && (
                  <h2>The condition is truthy;</h2>
              )}

              {!condition && (<h2>The condition is falsy;</h2>)}

              {condition ? <h2>The condition is truthy;</h2> : <h2>The condition is falsy;</h2>}

              <button onClick={() => setCondition(!condition)}>Toggle Condition</button>

              <h2>Counter: {counter} </h2>
              <button onClick={increaseCounter}>Increase Counter</button>

              <h2 onClick={handleClick}>{title}</h2>

              <button onClick={() => setShowMovies(!showMovies)}>Toggle Movies</button>
              {showMovies && <MovieList/>}


              {/!*<MovieList/>*!/}
              {/!*<MovieList/>*!/}
          </main>

      </>
  )*/

    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/movies" element={<MoviesPage/>} />
            <Route path="/blog" element={<BlogPage/>} />
            <Route path="/blog/:id" element={<PostDetails/>} />
            <Route path="/coffee/:id" element={<CoffeeDetails/>} />
            <Route path="/coffee" element={<CoffeesPage/>} />
            <Route path="/order" element={<OrderPage/>} />
        </Routes>
    )
}

export default App
