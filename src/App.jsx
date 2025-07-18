import Header from "./Component/Header/Header.jsx";
import UserInput from "./Component/UserInput/UserInput.jsx";
import ResultTable from "./Component/ResultTable/ResultTable.jsx";
import {useState} from "react";
import {calculateInvestmentResults} from "./util/investment";
import Input from "./Component/UserInput/Input.jsx";

function App() {
    const [initialInvestmentInput, setInitialInvestmentInput] = useState('');
    const [annualInvestment, setAnnualInvestment] = useState('');
    const [expectedReturn, setExpectedReturn] = useState('');
    const [duration, setDuration] = useState('');
    const [calculatedResults, setCalculatedResults] = useState([]);


    function handleInitialInvestmentInput(e) {
        setInitialInvestmentInput(+e.target.value);
        if (+e.target.value && annualInvestment && expectedReturn && duration) {
            setCalculatedResults(
                calculateInvestmentResults({
                    initialInvestment: +e.target.value,
                    annualInvestment,
                    expectedReturn,
                    duration
                })
            )
        }
    }

    function handleAnnualInvestmentInput(e) {
        setAnnualInvestment(+e.target.value);
        if (+e.target.value && initialInvestmentInput && expectedReturn && duration) {
            setCalculatedResults(
                calculateInvestmentResults({
                    initialInvestment: initialInvestmentInput,
                    annualInvestment: +e.target.value,
                    expectedReturn,
                    duration
                })
            );
        }
    }

    function handleExpectedReturnInput(e) {
        setExpectedReturn(+e.target.value);
        if (+e.target.value && initialInvestmentInput && annualInvestment && duration) {

            setCalculatedResults(calculateInvestmentResults({
                initialInvestment: initialInvestmentInput,
                annualInvestment,
                expectedReturn: +e.target.value,
                duration
            }));

        }
    }

    function handleDurationInput(e) {
        setDuration(+e.target.value);
        if (+e.target.value && initialInvestmentInput && annualInvestment && expectedReturn) {
            setCalculatedResults(calculateInvestmentResults({
                initialInvestment: initialInvestmentInput,
                annualInvestment,
                expectedReturn,
                duration: +e.target.value,
            }));
        }

    }


    const initialInvestment_input = <Input val={initialInvestmentInput} onInputChange={handleInitialInvestmentInput}
                                           labelText="Initial Investment"></Input>
    const annualInvestment_input = <Input val={annualInvestment} onInputChange={handleAnnualInvestmentInput}
                                          labelText="Annual Investment"></Input>
    const expectedReturn_input = <Input val={expectedReturn} onInputChange={handleExpectedReturnInput}
                                        labelText="Expected Return"></Input>
    const duration_input = <Input val={duration} onInputChange={handleDurationInput}
                                  labelText="Duration"></Input>

    return (
        <>
            <Header/>
            <UserInput
                investmentInput={initialInvestment_input}
                annualInvestment={annualInvestment_input}
                expectedReturn={expectedReturn_input}
                durationInput={duration_input}
            />
            {calculatedResults.length > 0 && <ResultTable calculated_result={calculatedResults}/>}
        </>
    )
}

export default App
