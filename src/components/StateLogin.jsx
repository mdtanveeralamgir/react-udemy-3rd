import Input from "./Input";
import useInput from "../hooks/Input.js";
import {isEmail, isNotEmpty} from "../util/validation.js";

export default function Login() {
    const {
        value: emailValue,
        handleInputChange: handleEmailChange,
        handleInputBlur: handleEmailBlur,
        hasError: isEmailInvalid
    } = useInput('', (value) => isEmail(value) && isNotEmpty(value))
    const {
        value: passwordValue,
        handleInputChange: handlePasswordChange,
        handleInputBlur: handlePasswordBlur,
        hasError: isPasswordInvalid
    } = useInput('', isNotEmpty)


    function handleSubmit(event) {
        event.preventDefault();
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
                <Input id='email'
                       label='Email'
                       type='email'
                       name='email'
                       onChange={handleEmailChange}
                       value={emailValue}
                       onBlur={handleEmailBlur}
                       error={isEmailInvalid ? 'Please enter a valid email address.' : ''}
                />

                <Input id='password'
                       label='Password'
                       type='password'
                       name='password'
                       onChange={handlePasswordChange}
                       value={passwordValue}
                       onBlur={handlePasswordBlur}
                       error={isPasswordInvalid ? 'Cannot be empty.' : ''}
                />
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
