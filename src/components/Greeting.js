import {useState} from "react";

export default function Greeting() {
    const [changedText, setChangedText] = useState(false);
    return (
        <div>
            <h2>Hello world</h2>
            {!changedText && <p>It's good to see you</p>}
            {changedText && <p>Changed</p>}
            <button onClick={() => setChangedText(true)}>Change text</button>
        </div>
    )
}