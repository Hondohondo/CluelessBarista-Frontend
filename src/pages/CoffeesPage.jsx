import {useEffect, useState} from "react";
import CoffeeCard from "../components/CoffeeCard.jsx";
import HeaderComponent from "../components/HeaderComponent.jsx";
import CreateCoffee from "../components/CreateCoffee.jsx";
import NavComponent from "../components/NavComponent.jsx";

function CoffeesPage() {
    //create a reactive variable to store some api info

    //initiaal value is an empty array
    const [coffees, setCoffees] = useState([]);

    /* async function getCoffees() {

     }*/
    const getCoffees = async () => {
        try {
            // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const response = await fetch("http://localhost:8080/api/coffees");

            const data = await response.json();
            // console.log(data);
            setCoffees(data);
        } catch (e) {
            console.log(e);
        }

    }

    const createCoffee = async (coffee) => {
        try {
            console.log(coffee);
            // console.log(JSON.stringify(coffee));
            await fetch("http://localhost:8080/api/coffees", {
                method: "POST",
                body: JSON.stringify(coffee),
                headers: {
                    "Content-Type": "application/json",
                }
            });
            getCoffees();

        } catch (e) {
            console.log(e);
        }

    }


    useEffect(() => {
        getCoffees();
    }, []);


    const coffeeCards = coffees.map((coffee) => {
        return (
            <li key={coffee.coffeeId}>
                <CoffeeCard coffee={coffee} />
            </li>
        )
    })

    return (
        <>
            <HeaderComponent />
            <div className="home-page-container">
                <NavComponent />
                <main className="main">
                    {/*<CreateCoffee createCoffee={createCoffee} />*/}

                    <section>
                        <h2>Our Collection of Past Coffee Orders</h2>
                        <ul>
                            {coffeeCards}
                        </ul>
                    </section>
                </main>
            </div>


        </>


    )
}

export default CoffeesPage;