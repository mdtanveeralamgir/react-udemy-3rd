import {createStore} from 'redux';

const reducer = (state = {counter: 0}, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }
    if (action.type === 'custom') {
        return {
            counter: state.counter + action.payload
        }
    }

    return state;
}

const store = createStore(reducer);

export default store;