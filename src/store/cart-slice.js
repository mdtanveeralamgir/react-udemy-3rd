import {createSlice} from '@reduxjs/toolkit';

const initialState = {items: [], showCart: false, Notification: null}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        //calling fetch / async function inside reducer is not allowed
        //fetch() //not allowed
        //async function something() //not allowed
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
        replaceCart(state, action) {
            state.showCart = false;
            state.items = action.payload;
            state.Notification = null;
        },
        toggleCart(state) {
            state.showCart = !state.showCart;
        },
        showNotification(state, action) {
            state.Notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            };
        }
    }
});




export const cartAction = cartSlice.actions;
export default cartSlice.reducer;