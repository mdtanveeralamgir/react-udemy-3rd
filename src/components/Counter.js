import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {counterAction} from '../store';

const Counter = () => {
    //useSelector creates a subscription from this component to the store
    //if the component unmounts the subscription also unmounts
    const counter = useSelector(state => state.counter);
    const show = useSelector(state => state.showCounter);
    const dispatch = useDispatch();

    function incrementHandler() {
        dispatch(counterAction.increment());

    }

    function decrementHandler() {
        dispatch(counterAction.decrement());
    }

    function customIncrementHandler(value) {
        dispatch(counterAction.custom(value));
    }

    function toggleCounterHandler() {
        dispatch(counterAction.toggleCounter());
    }


    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={() => customIncrementHandler(5)}>Increased by 5</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
