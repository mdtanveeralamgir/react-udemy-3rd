import {useAccordianContext} from "./Accordion.jsx"
import {useAccordionItemContext} from "./AccordionItem.jsx"

export default function AccordionTitle({children}) {
    const {toggleItem} = useAccordianContext();
    const id = useAccordionItemContext();
    return <h3 onClick={() => toggleItem(id)}>{children}</h3>
}