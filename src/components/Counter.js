import classes from './Counter.module.css';
import { useSelector} from 'react-redux';
const Counter = () => {
    //useSelector creates a subscription from this component to the store
    //if the component unmounts the subscription also unmounts
    const counter = useSelector(state => state.counter);
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
