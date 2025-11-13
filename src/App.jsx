import Accordion from "./components/Accordion/Accordion.jsx";
import SearchableList from "./components/SearchableList/SearchableList.jsx";
import {PLACES} from "./Places.js"
import Place from "./Place.jsx";

function App() {
    return <main>
        <section>
            <h1>Why work with us</h1>
            <Accordion className="accordion">
                <Accordion.Item id="experience" className="accordion-item">
                    <Accordion.Title>We got 20 years of experience</Accordion.Title>
                    <Accordion.Content>
                        <article>
                            <p>you cannot go wrong with us</p>
                            <p>We are specialized to your needs</p>
                        </article>
                    </Accordion.Content>

                </Accordion.Item>
                <Accordion.Item id="value" className="accordion-item">
                    <Accordion.Title>We are the best</Accordion.Title>
                    <Accordion.Content>
                        <article>
                            <p>We are best at what we do</p>
                            <p>We are far more flexiable than your other options</p>
                        </article>
                    </Accordion.Content>

                </Accordion.Item>
            </Accordion>


        </section>
        <section>
            <SearchableList items={PLACES}>
                {(item) => <Place key={item.id} item={item}/>}
            </SearchableList>
        </section>
    </main>
}

export default App;
