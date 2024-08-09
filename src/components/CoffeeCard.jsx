import {Link} from "react-router-dom";


function CoffeeCard(props) {
    const { coffee } = props;

  /*  "coffeeId": 1,
        "coffeeName": "Classic Espresso",
        "coffeeIngredients": "Espresso, hot water",
        "coffeeInstructions": "1. Brew espresso shot. 2. Mix with hot water in a 1:1 ratio.",
        "postedBy": "CoffeeExpert"*/

    return (

        <article className="coffee-article">
            <Link to={`/coffee/${coffee.coffeeId}`}>
                <h3>{coffee.coffeeName}</h3>
            </Link>
            <p>
             <code>Ingredients:</code> <em> {coffee.coffeeIngredients}</em>
            </p>
            <p>
              <code>Instructions:</code>  {coffee.coffeeInstructions}
            </p>
            <p>
                <em>Ordered By: {coffee.postedBy}</em>
            </p>
        </article>
    )
}

export default CoffeeCard;