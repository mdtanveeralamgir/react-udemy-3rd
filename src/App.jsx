import Meals from "./Component/Meals/Meals.jsx";
import Cart from "./Component/Cart/Cart.jsx";
import {CartContext} from "./store/CartContext.js";
import {useState} from "react";

function App() {
    const [cartItem, setCartItem] = useState([]);
    
    const cartCtxVal = {
        items: cartItem,
        addToCart: setCartItem
    }
    return (
        <CartContext value={cartCtxVal}>
            <Cart/>
            <Meals/>
        </CartContext>
    );
}

export default App;
