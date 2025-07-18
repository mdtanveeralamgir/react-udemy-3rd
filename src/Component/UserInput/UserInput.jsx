import './UserInputCss.css'
import {useState} from "react";

export default function UserInput() {
    const [userInputs, setUserInputs] = useState({
        initialInvestment: 10000,
        annualInvestment: 1000,
        expectedReturn: 6,
        duration: 10,
    });

    function handleChange(inputIdentifier, newValue) {
        setUserInputs((prevState) => {
            return {
                ...prevState,
                [inputIdentifier]: newValue
            }
        });
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input value={userInputs.initialInvestment} onChange={(event) => handleChange('initialInvestment', event.target.value)} type="number"
                           required/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input value={userInputs.annualInvestment} onChange={(event) => handleChange('annualInvestment', event.target.value)} type="number" required/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input value={userInputs.expectedReturn} onChange={(event) => handleChange('expectedReturn', event.target.value)} type="number" required/>
                </p>
                <p>
                    <label>Duration</label>
                    <input value={userInputs.duration} onChange={(event) => handleChange('duration', event.target.value)} type="number" required/>
                </p>
            </div>
        </section>
    )
}