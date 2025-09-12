import {useState} from "react";

export default function NewTask({onAdd}) {
    const [enteredTasks, setEnteredTasks] = useState('');

    function handleChange(event) {
        setEnteredTasks(event.target.value);
    }

    function handleClick() {
        if (enteredTasks.trim() === '') {
            return;
        }
        onAdd(enteredTasks);
        setEnteredTasks('');
    }

    return <div className="flex gap-4 items-center">
        <input onChange={handleChange} value={enteredTasks} type="text"
               className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
        <button onClick={handleClick}
                className="text-stone-700 hover:text-stone-950">Add Task
        </button>
    </div>
}