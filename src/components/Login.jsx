import {useRef} from "react";

export default function Login() {
    const email = useRef();
    const password = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        console.log(email.current.value)
        console.log(password.current.value)

        //Reset using event
        // event.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" ref={email}/>
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" name="password" ref={password}/>
                </div>
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                {/*//Default type is submit which will submit the form.*/}
                <button className="button">Login</button>
                {/*another way to prevent submit*/}
                {/*<button type='button' className="button" onClick={handleSubmit}>Login</button>*/}

            </p>
        </form>
    );
}
