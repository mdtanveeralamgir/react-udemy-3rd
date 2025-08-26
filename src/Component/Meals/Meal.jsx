import {useContext} from "react";
import CartContext from "../../store/CartContext.jsx";

export default function Meal({id, name, price, description, image}) {
    const cartCtx = useContext(CartContext);

    function handleOnClick() {
        cartCtx.addToCart(id);
    }

    return (
        <>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{price}</p>
            <img src={'http://localhost:3000/' + image} alt={name}/>
            <p>
                <button onClick={handleOnClick}>Add to cart</button>
            </p>
        </>
    );
}