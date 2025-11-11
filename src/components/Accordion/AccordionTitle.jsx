import {useAccordianContext} from "./Accordion.jsx"

export default function AccordionTitle({children, id}) {
    const {toggleItem} = useAccordianContext();
    return <h3 onClick={() => toggleItem(id)}>{children}</h3>
}