import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {sendCartData} from "./store/cart-slice";
import Notification from "./components/Notification/Notification";

let initialRender = true;

function App() {
    const isCartShown = useSelector(state => state.showCart);
    const cartItem = useSelector(state => state.items);
    const dispatch = useDispatch();
    const isNotification = useSelector(state => state.Notification);

    useEffect(() => {

        if (initialRender) {
            initialRender = false;
            return;
        }
        dispatch(sendCartData(cartItem));

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
