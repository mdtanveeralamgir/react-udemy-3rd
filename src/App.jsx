import Accordion from "./components/Accordion/Accordion.jsx";

function App() {
    return <main>
        <section>
            <h1>Why work with us</h1>
            <Accordion className="accordion">
                <Accordion.Item className="accordion-item">
                    <Accordion.Title id="experience">We got 20 years of experience</Accordion.Title>
                    <Accordion.Content id="experience">
                        <article>
                            <p>you cannot go wrong with us</p>
                            <p>We are specialized to your needs</p>
                        </article>
                    </Accordion.Content>

                </Accordion.Item>
                <Accordion.Item openId="value" className="accordion-item">
                    <Accordion.Title id="value">We are the best</Accordion.Title>
                    <Accordion.Content id="value">
                        <article>
                            <p>We are best at what we do</p>
                            <p>We are far more flexiable than your other options</p>
                        </article>
                    </Accordion.Content>

                </Accordion.Item>
            </Accordion>


        </section>
    </main>
}

export default App;
