import './UserInputCss.css'
import Input from "./Input.jsx";

export default function UserInput({investmentInput, annualInvestment,expectedReturn,durationInput}) {
    return (
        <section id="user-input">
            <div className="input-group">
                {investmentInput}
                {annualInvestment}
            </div>
            <div className="input-group">
                {expectedReturn}
                {durationInput}
            </div>
        </section>
    )
}