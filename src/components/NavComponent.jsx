import "./NavComponent.css";
import {Link} from "react-router-dom";

//a function that returns some html.
function NavComponent(){
    return (
            <nav className="left-nav">
                <ul className="link-list">
                    <li><Link className="link" to="/">Home</Link></li>
                    <li><Link className="link" to="/coffee">Coffees</Link></li>
                    <li><Link className="link" to="/order">Order Coffee</Link></li>
                    <li><a className="link" href="#">Contact Us</a></li>
                </ul>
            </nav>
    )
}

export default NavComponent;