import {useAccordianContext} from "./Accordion.jsx";

export default function AccordionItem({title, children, className, openId}) {
    const {openItemId, openItem, closeItem} = useAccordianContext();
    const isOpen = openItemId === openId;

    function handleClick() {
        if (isOpen) {
            closeItem();
        } else {
            openItem(openId);
        }
    }

    return <li className={className}>
        <h3 onClick={handleClick}>{title}</h3>
        <div className={isOpen ? 'accordion-item-content open' : 'accordion-item-content'}>{children}</div>
    </li>
}
