import {createContext, useContext, useState} from "react";

const AccordionContext = createContext();

export function useAccordianContext() {
    const ctx = useContext(AccordionContext);

    if(!ctx) {
        throw new Error("useAccordionContext must be used within an Accordion");
    }
    return ctx;
}

export default function Accordion({children, className}) {
    const [openItemId, setOpenItemId] = useState();

    function openItem(itemId) {
        setOpenItemId(itemId);
    }

    function closeItem() {
        setOpenItemId(null);
    }

    const contextValue = {
        openItemId,
        openItem,
        closeItem
    }
    return (<AccordionContext.Provider value={contextValue}>
        <ul className={className}>
            {children}
        </ul>
    </AccordionContext.Provider>)
}