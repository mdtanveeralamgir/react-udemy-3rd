const redux = require('redux');

const counterReducer = (state = {counter: 0}, action) => {
    return {
        counter: state.counter + 1
    }
}

const store = redux.createStore(counterReducer);

//this will trigger whenever the state changes
const counterSubscriber = () => {
    //getState() always returns the current state
    const latestState = store.getState();
    console.log(latestState);
    return latestState;
}

//registering counterSubscriber so it can executes whenever state changes
store.subscribe(counterSubscriber);

store.dispatch({type: 'increment'});


