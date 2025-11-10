import Accordion from "./components/Accordion/Accordion.jsx";
import AccordionItem from "./components/Accordion/AccordionItem.jsx";

function App() {
    return <main>
        <section>
            <h1>Why work with us</h1>
            <Accordion className="accordion">
                <AccordionItem openId="experience" title="We got 20 years of experience" className="accordion-item">
                    <article>
                        <p>you cannot go wrong with us</p>
                        <p>We are specialized to your needs</p>
                    </article>
                </AccordionItem>
                <AccordionItem openId="value" title="We are the best" className="accordion-item">
                    <article>
                        <p>We are best at what we do</p>
                        <p>We are far more flexiable than your other options</p>
                    </article>
                </AccordionItem>
            </Accordion>


        </section>
    </main>
}

export default App;
