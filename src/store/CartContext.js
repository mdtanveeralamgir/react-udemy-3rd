import {createContext, useReducer} from "react";


const CartContext = createContext({
    items: [],
    addToCart: () => {
    }
});

function cartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        const updatedItems = [...state.items];
        updatedItems.push(action.payload);
        return {...state, items: updatedItems};
    }
    return state
}

export function cartContextProvider({children}) {

    return <CartContext>
        {children}
    </CartContext>
}

export default CartContext;