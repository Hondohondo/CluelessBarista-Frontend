import {useState} from "react";

function createCoffee(props) {

    //we are receiving this function(createCoffee) from its parent component
    const {createCoffee} = props;

    //we have a title whose initial value is an empty string
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [poster, setPoster] = useState('');

    const handleNameInput = (e) => {

        // console.log("name has been changed");
        // console.log(e.target.value);

        //change the name variable to a new value via setter
        setName(e.target.value);
    }
    const handleIngredientsInput = (e) => {
        // console.log(e.target.value);

        setIngredients(e.target.value);
    }
    const handleInstructionsInput = (e) => {
        // console.log(e.target.value);

        setInstructions(e.target.value);
    }

    const handlePosterInput = (e) => {
        // console.log(e.target.value);

        setPoster(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Create Coffee");
        // console.log(name, ingredients, instructions);
        const coffee = {
            //if the properties have the same name as variables, you can also write just properties e.g name, img, instructions
            /*name: name,
            img: ingredients,
            instructions: instructions,*/
            /*property: variable*/
             coffeeName: name,
             coffeeIngredients: ingredients,
             coffeeInstructions: instructions,
             postedBy: poster,
        }
        // console.log(coffee);

      /*  if(!name) return;
        OR
        if(!name) {
            console.log("Name is required");
            return;
        }*/
        if(!name) {
            console.log("Coffee Name is required");
            return;
        }

        createCoffee(coffee);

        setInstructions(0);
        setName("");
        setIngredients("");
        setPoster("");
    }

    return (
        <form onSubmit={handleSubmit}>
            {/*{name}*/}
            <fieldset>
                <label htmlFor="coffee-name">Coffee Name: </label>
                <input
                    type="text"
                    id="coffee-name"
                    onChange={handleNameInput}
                    value={name}
                />
            </fieldset>
            <fieldset>
                <label htmlFor="coffee-ingredients">Coffee Ingredients: </label>
                <input
                    type="text"
                    id="coffee-ingredients"
                    onChange={handleIngredientsInput}
                    value={ingredients}
                />
            </fieldset>
            <fieldset>
                <label htmlFor="coffee-instructions">Coffee Instructions: </label>
                <input
                    type="text"
                    id="coffee-instructions"
                    onChange={handleInstructionsInput}
                    value={instructions}
                />
            </fieldset>
            <fieldset>
                <label htmlFor="coffee-poster">Posted By: </label>
                <input
                    type="text"
                    id="coffee-poster"
                    onChange={handlePosterInput}
                    value={poster}
                />
            </fieldset>

            <button>Create Coffee</button>
        </form>
    )
}

export default createCoffee