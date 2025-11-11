import {useAccordianContext} from "./Accordion.jsx"
import {useAccordionItemContext} from "./AccordionItem.jsx"

export default function AccordionContent({children}) {
    const {openItemId} = useAccordianContext();
    const id = useAccordionItemContext();

    const isOpen = openItemId === id
    return <div className={isOpen ? 'accordion-item-content open' : 'accordion-item-content'}>{children}</div>

}