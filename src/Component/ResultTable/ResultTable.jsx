import './ResultTableCss.css';
import {useState} from "react";
import {calculateInvestmentResults} from "../../util/investment.js";

export default function ResultTable({userInputs}) {
    const calculated_result = calculateInvestmentResults(userInputs);

    return (
        <table id="result">
            <thead>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
            </thead>
            <tbody>
            {calculated_result.map(row => <tr key={row.year}>
                <td>{row.year}</td>
                <td></td>
                <td>{row.valueEndOfYear}</td>
                <td>{row.interest}</td>
                <td>{row.annualInvestment}</td>
            </tr>)}
            </tbody>
        </table>
    );
}