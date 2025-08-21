import {useRef, useState} from "react";

export default function Login() {
    const [emailsIsValid, setEmailsIsValid] = useState(true)
    const email = useRef();
    const password = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        const emailIsValid = email.current.value.includes('@');
        if (!emailIsValid) {
            setEmailsIsValid(false);
            return;
        }
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
                    <div className='control-error'>{!emailsIsValid && <p>Please enter an valid email</p>}</div>
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
