import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from "react-redux";
import {products} from "../../products";

const Cart = (props) => {
    const addedCartItems = useSelector(state => state.items);
    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
                {addedCartItems.map(cartItem => {
                    let addedItem = products.find(product => product.id === cartItem.id);
                    const price = addedItem.price * cartItem.quantity;
                    return <CartItem key={cartItem.id} item={{
                        id: addedItem.id,
                        title: addedItem.title,
                        quantity: cartItem.quantity,
                        total: price,
                        price: addedItem.price
                    }}/>;
                })}
                {/*<CartItem*/}
                {/*    item={{title: 'Test Item', quantity: 3, total: 18, price: 6}}*/}
                {/*/>*/}
            </ul>
        </Card>
    );
};

export default Cart;
