import './ResultTableCss.css';
import {useState} from "react";
import {calculateInvestmentResults, formatter} from "../../util/investment.js";

export default function ResultTable({userInputs}) {
    const calculated_result = calculateInvestmentResults(userInputs);
    const initialInvestment = userInputs.initialInvestment;
    return (
        <table id="result">
            <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest(Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            {calculated_result.map(row => {
                const totalInterest = row.valueEndOfYear - row.annualInvestment * row.year - initialInvestment;
                const totalAmountInvested = row.valueEndOfYear - totalInterest;
                return (<tr key={row.year}>
                    <td>{row.year}</td>
                    <td>{formatter.format(row.valueEndOfYear)}</td>
                    <td>{formatter.format(row.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{totalAmountInvested}</td>
                </tr>)
            })}
            </tbody>
        </table>
    );
}