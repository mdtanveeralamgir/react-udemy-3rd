import Header from "./Component/Header/Header.jsx";
import UserInput from "./Component/UserInput/UserInput.jsx";
import {useState} from "react";
import ResultTable from "./Component/ResultTable/ResultTable.jsx";

function App() {
    const [userInputs, setUserInputs] = useState({
        initialInvestment: 10000,
        annualInvestment: 1000,
        expectedReturn: 6,
        duration: 10,
    });
    const isInputValid = userInputs.duration > 0;

    function handleChange(inputIdentifier, newValue) {
        setUserInputs((prevState) => {
            return {
                ...prevState,
                [inputIdentifier]: +newValue
            }
        });
    }

    return (
        <>
            <Header/>
            <UserInput onChangeInput={handleChange} userInputs={userInputs}/>
            {!isInputValid && <p className="center">Please enter a valid duration</p>}
            {isInputValid && <ResultTable userInputs={userInputs}/>}
        </>
    )
}

export default App
