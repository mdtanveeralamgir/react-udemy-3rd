import {useRef} from 'react';
import {createPortal} from 'react-dom';

const Modal = function Modal({children, open}) {
    const dialog = useRef();
    if(open)
        dialog.current.showModal();
    else
        dialog.current.close();
console.log(open)
    return createPortal(
        <dialog className="modal">
            {children}
        </dialog>,
        // document.getElementById('modal')
    );
};

export default Modal;
