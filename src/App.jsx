import Meals from "./Component/Meals/Meals.jsx";
import Cart from "./Component/Cart/Cart.jsx";
import {CartContextProvider} from "./store/CartContext.jsx";

function App() {
    return (
        <CartContextProvider>
            <Cart/>
            <Meals/>
        </CartContextProvider>
    );
}

export default App;
