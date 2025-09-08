import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {sendCartData, fetchCartData} from "./store/cart-actions";
import Notification from "./components/Notification/Notification";

let initialRender = true;

function App() {
    const isCartShown = useSelector(state => state.showCart);
    const cartItem = useSelector(state => state.items);
    const isCartItemChanged = useSelector(state => state.isChanged);
    const dispatch = useDispatch();
    const isNotification = useSelector(state => state.Notification);

    useEffect(() => {
        dispatch(fetchCartData());

    }, []);

    useEffect(() => {

        if (initialRender) {
            initialRender = false;
            return;
        }
        if (isCartItemChanged)
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
