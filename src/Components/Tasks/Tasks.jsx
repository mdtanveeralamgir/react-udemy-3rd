import NewTask from "./NewTask.jsx";


export default function Tasks({onAdd, onDelete, tasks}) {
    return (
        <section>
            <h2 className="text-2xl text-stone-700 font-bold mb-4">Task</h2>
            <NewTask onAdd={onAdd}/>
            {tasks.length === 0 && <p className="text-stone-800 my-4">No task</p>}
            {tasks.length > 0 && <ul className="p-4 mt-8 rounded-md bg-stone-100">
                {tasks.map(task =>
                    <li key={task.id} className="flex justify-between my-4">
                        <span>{task.text}</span>
                        <span onClick={() => onDelete(task.id)}
                              className="text-stone-700 hover:text-red-300">Delete</span>
                    </li>)}
            </ul>}
        </section>
    )
}