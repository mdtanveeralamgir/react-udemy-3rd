import {createPortal} from "react-dom";
import {useImperativeHandle, useRef} from "react";
import AddProjectButton from "../Buttons/AddProjectButton.jsx";

export default function Modal({children, ref, buttonCaption}) {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        };
    });

    return createPortal(<dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
        {children}
        <form method="dialog" className="mt-4 text-right">
            <AddProjectButton>{buttonCaption}</AddProjectButton>
        </form>
    </dialog>, document.getElementById('modal-root'))
}