import {useEffect, useState} from "react";
import Meal from "./Meal.jsx";

export default function Meals() {
    const [meals, setMeals] = useState([]);

    useEffect(() => {

        fetch('http://localhost:3000/meals')
            .then(response => response.json())
            .then(data => setMeals(data))

    }, []);

    return (
        <>
            {meals.map(meal => (
                <Meal key={meal.id} name={meal.name} description={meal.description} image={meal.image}
                      price={meal.price}>{meal.name}</Meal>
            ))}
        </>
    );
}