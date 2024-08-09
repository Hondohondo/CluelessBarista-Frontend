import HeaderComponent from "../components/HeaderComponent.jsx";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import NavComponent from "../components/NavComponent.jsx";

function CoffeeDetails() {

   const { id } = useParams()

    const [coffee, setCoffee] = useState();

    const getCoffee = async (id) => {
        // const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const response = await fetch(`http://localhost:8080/api/coffee/${id}`);

        const data = await response.json();
        console.log(data);
        setCoffee(data);
    }

    useEffect(() => {
        // console.log("id", id)
        getCoffee(id);
    }, [id]);



    return (
        <>
            {/*<HeaderComponent />*/}
            <HeaderComponent />
            <div className="home-page-container">
                <NavComponent />
                <main className="main">
                    {/*<div>Details</div>*/}
                    {!coffee && <h2>Loading...</h2>}
                    {coffee && (
                        <section>
                            <h3>{coffee.coffeeName}</h3>
                            <p>
                                <code>Ingredients:</code> <em> {coffee.coffeeIngredients}</em>
                            </p>
                            <p>
                                <code>Instructions:</code>  {coffee.coffeeInstructions}
                            </p>
                            <p>
                                <em>Ordered By: {coffee.postedBy}</em>
                            </p>
                        </section>
                    )}


                </main>
            </div>

        </>
    )
}

export default CoffeeDetails;