=> redux (3rd party lib alternative of useContext)
=> useSelector
=> useDispatch
=> redux toolkit
=> configureStore

304*:
    - Life cycle of redux
306*:
    - setup a simple redux
    - setup redux for counter
307*:
    - set up dispatcher/action.type
310*:
    - Provide store to whole app wide
311*:
    - useSelector
    - using part of store in a component
312*:
    - useDispatch
    - increment/decrement counter values
316*:
    - never modify the current state
    - always override existing state by returning a new state
318*: toolkit, createSlice
    - simplify reducer
    - how to use createSlice
319*: configureStore
    - using configureStore to connect reducer to the store
320*:
    - using new counterSlice in the dispatcher
321*:
    - adding another reducer and add it to the store
322*:
    - using 2nd reducer to sign in and signout