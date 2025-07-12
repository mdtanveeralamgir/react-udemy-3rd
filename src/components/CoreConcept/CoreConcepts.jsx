import CoreConcept from "./CoreConcept";
import {CORE_CONCEPTS} from "../../data";
export default function CoreConcepts() {
    return (<section id="core-concepts">
        <ul>
            {CORE_CONCEPTS.map((eachConcept) => <CoreConcept key={eachConcept.title} {...eachConcept}/>)}
        </ul>
    </section>);
}
