import {cartAction} from "./cart-slice";

export function fetchCartData() {
    return async (dispatch) => {

        async function fetchCartItems() {
            const response = await fetch('https://react-56141-default-rtdb.firebaseio.com/cart.json');
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            return await response.json();
        }

        try {
            const cartData = await fetchCartItems();
            console.log(cartData);
            dispatch(cartAction.replaceCart(cartData));
        } catch (error) {
            dispatch(cartAction.showNotification({
                status: 'error',
                title: 'Error!',
                message: error.message
            }));
        }
    }
}

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