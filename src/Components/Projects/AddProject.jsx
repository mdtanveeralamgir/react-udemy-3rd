import Input from "./Input.jsx";
import {useRef} from "react";

export default function AddProject({onAddProjectClick}) {
    const title = useRef('');
    const description = useRef('');
    const dueDate = useRef('');

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        onAddProjectClick({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }

    return <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end my-4 gap-4">
            <li>
                <button className="text-stone-800 hover:text-stone-950">Cancel</button>
            </li>
            <li>
                <button onClick={handleSave}
                        className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save
                </button>
            </li>
        </menu>
        <div>
            <Input type="text" ref={title} labelText="Title"/>
            <Input ref={description} labelText="Description" isTextArea/>
            <Input type="date" ref={dueDate} labelText="Due Date"/>
        </div>
    </div>
}