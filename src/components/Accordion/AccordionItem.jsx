import {useAccordianContext} from "./Accordion.jsx";

export default function AccordionItem({ children, className}) {
    return <li className={className}>
        {children}
    </li>
}
