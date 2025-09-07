import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {cartAction} from "./store/cart-slice";
import Notification from "./components/Notification/Notification";

let initialRender = true;

function App() {
    const isCartShown = useSelector(state => state.showCart);
    const cartItem = useSelector(state => state.items);
    const dispatch = useDispatch();
    const isNotification = useSelector(state => state.Notification);

    useEffect(() => {

        const sendData = async () => {
            dispatch(cartAction.showNotification({status: 'pending', title: 'Updating', message: 'Sending data.'}));
            const response = await fetch('https://react-56141-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cartItem)
            });

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            dispatch(cartAction.showNotification({
                status: 'success',
                title: 'Done',
                message: 'Data has been updated.'
            }));
        }
        if (initialRender) {
            initialRender = false;
            return;
        }
        sendData().catch((error) => {
            dispatch(cartAction.showNotification({
                status: 'error',
                title: 'Error!',
                message: error.message
            }));
        })

    }, [cartItem, dispatch]);
    return (
        <>
            {isNotification && <Notification status={isNotification.status} title={isNotification.title}
                                             message={isNotification.message}/>}
            <Layout>
                {isCartShown && <Cart/>}
                <Products/>
            </Layout>
        </>
    );
}

export default App;
