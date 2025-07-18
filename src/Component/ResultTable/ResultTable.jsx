import './ResultTableCss.css';
import {useState} from "react";

export default function ResultTable({userInputs}) {
const [calculatedValue, setCalculatedValue] = useState([]);

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