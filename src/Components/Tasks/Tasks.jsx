import NewTask from "./NewTask.jsx";
import {useState} from "react";



export default function Tasks() {
    const [taskList, setTaskList] = useState([]);

    function addTask(task) {
        setTaskList(prevState => [...prevState, {
            task: task,
            id: Math.random()
        }]);
    }
    return (
        <section>
            <h2 className="text-2xl text-stone-700 font-bold mb-4">Task</h2>
            <NewTask handleAddTask={addTask}/>
            {taskList.length === 0 && <p className="text-stone-800 my-4">No task</p>}
            <ul>
                {taskList.map(task => <li key={task.id}>{task.task}</li>)}
            </ul>
        </section>
    )
}