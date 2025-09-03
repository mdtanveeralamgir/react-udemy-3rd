import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux';

const Counter = () => {
    //useSelector creates a subscription from this component to the store
    //if the component unmounts the subscription also unmounts
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const toggleCounterHandler = () => {

    };

    function incrementHandler() {
        dispatch({type: 'increment'});
    }

    function decrementHandler() {
        dispatch({type: 'decrement'});
    }

    function customIncrementHandler(value) {
        dispatch({type: 'custom', payload: value});
    }


    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>{counter}</div>
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
