import {useState} from "react";

export default function Login() {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log(enteredEmail)
    }

    function handleEmailChange(event) {
        setEnteredEmail(event.target.value)
    }

    function handlePasswordChange(event) {
        setEnteredPassword(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" onChange={handleEmailChange} value={enteredEmail} name="email"/>
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" onChange={handlePasswordChange} value={enteredPassword}
                           name="password"/>
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
