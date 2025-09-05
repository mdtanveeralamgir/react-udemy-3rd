import classes from './CartButton.module.css';
import {useDispatch} from "react-redux";
import {cartAction} from "../../store/cart-slice";
import {useSelector} from "react-redux";

const CartButton = (props) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.items);

    function toggleCartHandler() {
        dispatch(cartAction.toggleCart());
    }

    return (
        <button className={classes.button} onClick={toggleCartHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>{cartItems.length}</span>
        </button>
    );
};

export default CartButton;
