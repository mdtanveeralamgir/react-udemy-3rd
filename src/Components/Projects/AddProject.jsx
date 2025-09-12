import Input from "./Input.jsx";
import {useRef} from "react";
import Modal from "../Modal/Modal.jsx";

export default function AddProject({onAddProjectClick, onCancelClick}) {
    const modal = useRef();
    const title = useRef('');
    const description = useRef('');
    const dueDate = useRef('');

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (enteredTitle.trim() === '' || enteredDueDate.trim() === '' || enteredDescription.trim() === '') {
            modal.current.open();
            return;
        }

        onAddProjectClick({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }

    return <>
        <Modal ref={modal} buttonCaption="Close">
            <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Value</h2>
            <p className="text-stone-400 mb-4">Looks like you forgot to provide a value.</p>
            <p className="text-stone-400 mb-4">Please make sure you entered value for all fields</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end my-4 gap-4">
                <li>
                    <button onClick={onCancelClick} className="text-stone-800 hover:text-stone-950">Cancel</button>
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
    </>
}