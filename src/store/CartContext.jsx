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

export function CartContextProvider({children}) {
    const [cart, dispatchCartAction] = useReducer(cartReducer, {items: []});

    const addItem = (id) => {
        dispatchCartAction({
            type: 'ADD_ITEM',
            payload: id
        })
    }

    const cartCtx = {
        items: cart.items,
        addToCart: addItem
    }


    return <CartContext value={cartCtx}>
        {children}
    </CartContext>
}

export default CartContext;