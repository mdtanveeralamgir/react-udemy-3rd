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
        hideCart(state) {
            state.showCart = false;
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

export function sendCartData(cartData) {
    return async (dispatch) => {
        dispatch(cartAction.showNotification({status: 'pending', title: 'Updating', message: 'Sending data.'}));

        async function sendRequest() {
            const response = await fetch('https://react-56141-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cartData)
            });

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
        }

        try {
            await sendRequest();
            dispatch(cartAction.showNotification({
                status: 'success',
                title: 'Done',
                message: 'Data has been updated.'
            }));
        } catch (error) {
            dispatch(cartAction.showNotification({
                status: 'error',
                title: 'Error!',
                message: error.message
            }));
        }


    }

}


export const cartAction = cartSlice.actions;
export default cartSlice.reducer;