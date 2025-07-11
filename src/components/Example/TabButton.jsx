export default function TabButton(props) {
    //The convension is to start the name of event handler functions with 'handle'
    //then name of the event
    function handleClick() {
        console.log("Hello world");
    }

    return <li>
        <button onClick={handleClick}>{props.children}</button>
    </li>;
}