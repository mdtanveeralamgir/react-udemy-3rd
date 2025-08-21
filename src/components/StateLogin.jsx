import {useState} from "react";

export default function Login() {
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [enteredPassword, setEnteredPassword] = useState('');

    const [enteredInput, setEnteredInput] = useState({
        email: '',
        password: ''
    });

    const emailIsInvalid = enteredInput.email !== '' && !enteredInput.email.includes('@');

    function handleSubmit(event) {
        event.preventDefault();
        console.log(enteredInput.email)
    }

    function handleInputChange(identifier, event) {
        setEnteredInput((prev) => ({...prev, [identifier]: event.target.value}));
    }

    // function handleEmailChange(event) {
    //
    // }
    //
    // function handlePasswordChange(event) {
    //     setEnteredPassword(event.target.value)
    // }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" onChange={(event) => handleInputChange('email', event)}
                           value={enteredInput.email} name="email"/>
                    <div className='control-error'>{emailIsInvalid && <p>Please enter a valid email address.</p>}</div>
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" onChange={(event) => handleInputChange('password', event)}
                           value={enteredInput.password}
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
