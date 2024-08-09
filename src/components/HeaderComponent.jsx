import "./HeaderComponent.css";
import {Link} from "react-router-dom";

//a function that returns some html.
function HeaderComponent(){
    return (
        <header className="header">
            <h1 className="title">The Clueless Barista 🤷 </h1>
        </header>
    )
}

export default HeaderComponent;