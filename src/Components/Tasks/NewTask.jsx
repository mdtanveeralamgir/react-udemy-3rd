import {useRef} from "react";

export default function NewTask({handleAddTask}) {
const newTaskValue = useRef();
    return <div className="flex gap-4 items-center">
        <input ref={newTaskValue} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
        <button onClick={() => handleAddTask(newTaskValue.current.value)} className="text-stone-700 hover:text-stone-950">Add Task</button>
    </div>
}