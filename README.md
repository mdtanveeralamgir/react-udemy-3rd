=> Component Composition
=> Create Context
=> use Reducer

166: Component Composition
    - Wrap a component with another component to avoid props drilling
168: Create Context (set up)
    - A hook to share data across components
    - Set up create context
    - define Shopping cart context and add it in the App.jsx
169: Create context (use in comonent to show data)
    - use cart context in cart component to show items in cart
    - use vs useContext hook
    - why need to pass value in the CartContext Component
170: crete context (structure data to modify context)
    - pass a function so new item can be added in the cart context
172: UI updates when context changes
    - Any component that consumes context will be updated if the context changes.
174: 
    - Moving all the functions and dependencies in the cart context component to keep app.jsx clean
    - Using a generic function to wrap the components that will use context to provide all the function used by components
175: REDUCER
    - Set up reducer
    - Using dispatch, state
176:
    - Add Update cart items using reducer
    - using dispatcher to pass values in the dispatcher function
