import {useContext} from "react";
import CartContext from "../../store/CartContext.jsx";

export default function Cart() {
    const cartCtx = useContext(CartContext);
    return (
        <header>
            <span>{cartCtx.items.length}</span>
        </header>
    );
}