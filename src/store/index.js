import {createStore} from 'redux';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {counter: 0, showCounter: true}
createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        custom(state, action) {
            state.counter += action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
})
const counterReducer = (state = initialState, action) => {
    if (action.type === 'increment') {
        //wrong, never modify current state
        // state.counter++;
        // return state;
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }
    if (action.type === 'custom') {
        return {
            counter: state.counter + action.payload,
            showCounter: state.showCounter
        }
    }
    if (action.type === 'toggle') {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }

    return state;
}

const store = createStore(counterReducer);

export default store;