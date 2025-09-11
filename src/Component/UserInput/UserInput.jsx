import './UserInputCss.css'

export default function UserInput({onChangeInput, userInputs}) {


    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input value={userInputs.initialInvestment}
                           onChange={(event) => onChangeInput('initialInvestment', event.target.value)} type="number"
                           required/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input value={userInputs.annualInvestment}
                           onChange={(event) => onChangeInput('annualInvestment', event.target.value)} type="number"
                           required/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input value={userInputs.expectedReturn}
                           onChange={(event) => onChangeInput('expectedReturn', event.target.value)} type="number"
                           required/>
                </p>
                <p>
                    <label>Duration</label>
                    <input value={userInputs.duration}
                           onChange={(event) => onChangeInput('duration', event.target.value)} type="number" required/>
                </p>
            </div>
        </section>
    )
}