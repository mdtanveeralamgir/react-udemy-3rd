import {useState} from "react";

export default function useInput(defaultValue, validationFN) {
    const [enteredInput, setEnteredInput] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false);

    function handleInputChange(event) {
        setEnteredInput(event.target.value);
        setDidEdit(false);
    }

    function handleInputBlur() {
        setDidEdit(true);
    }

    const inputIsValid = validationFN(enteredInput);
    return {
        value: enteredInput,
        handleInputChange,
        handleInputBlur,
        hasError: didEdit && !inputIsValid,
    }
}