=> sideEffects
=> useEffects
=> browser's navigator to get user's current location
=> useCallBack hook

178:
    - How to get user's current location
179: 
    - side effect of using useState wrongfully.
    - causing infinite loop
180: useEffect
    - How to use useEffect
    - how to use useEffect that runs only once when page loads
181: 
    - side effect not require useEffect
182:
    - Why not to use use effect to retrieve data from localStorage
183:
    - replace ref and useimperativehandle with state to open modal
    - without backdrop
184:
    - Using useEffect to make sure the DOM element is available that is grabbed by ref
    - before we could use any prop (useState) on that element
185:
    - declaring useEffect dependencies
    - what are dependencies and what are not
187:
    - setTimer to trigger an event
    - but the setTimer is not stop when the event is cancelled manually
188:
    - using useEffect to cleanup setTimeout event
189:
    - declaring dependencies of useEffect which is a function
    - why it can cause an infinite loop
    - why in this case it will not cause an infinite loop
190: useCallBack hook
    - creating a function if the dependencies change
    - create only once if there is no dependencies declared
    - use it to prevent a function from recreating hence
      preventing infinite loop while using that function
      in useEffect and passing as dependency


