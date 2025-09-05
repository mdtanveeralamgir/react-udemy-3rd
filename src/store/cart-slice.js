import {createSlice} from '@reduxjs/toolkit';

const initialState = {items: [], showCart: false}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const existingItem = state.items.findIndex(cartItem => cartItem.id === action.payload);
            if (existingItem > -1) {
                state.items[existingItem].quantity += 1;
            } else {
                state.items.push({id: action.payload, quantity: 1});
            }
        },
        removeItem(state, action) {
            const existingItem = state.items.findIndex(cartItem => cartItem.id === action.payload);
            if (existingItem > -1) {
                state.items[existingItem].quantity -= 1;
            }
            if (state.items[existingItem].quantity === 0) {
                state.items.splice(existingItem, 1);
            }
        },
        showCart(state) {
            state.showCart = true;
        },
        hideCart(state) {
            state.showCart = false;
        },
        toggleCart(state) {
            state.showCart = !state.showCart;
        },
        clearCart(state) {
            state.items = [];
        }
    }
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;