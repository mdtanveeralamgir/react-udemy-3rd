import NewTask from "./NewTask.jsx";

export default function Tasks() {
    return (
        <section>
            <h2 className="text-2xl text-stone-700 font-bold mb-4">Task</h2>
            <NewTask/>
            <p className="text-stone-800 my-4">No task</p>
            <ul></ul>
        </section>
    )
}