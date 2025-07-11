import {CORE_CONCEPTS} from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/Example/TabButton";

function App() {
    //The convension is to start the name of event handler functions with 'handle'
    //then name of the event
    function handleClick() {
        console.log("Hello world");
    }

    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <ul>
                        <CoreConcept
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                            image={CORE_CONCEPTS[0].image}
                        />
                        <CoreConcept {...CORE_CONCEPTS[1]}/>
                        <CoreConcept {...CORE_CONCEPTS[2]}/>
                        <CoreConcept {...CORE_CONCEPTS[3]}/>
                    </ul>
                </section>
                <section id="examples">
                <h2>Example</h2>
                    <menu>
                        <TabButton onClick={handleClick}>Components</TabButton>
                        <TabButton onClick={handleClick}>JSX</TabButton>
                        <TabButton onClick={handleClick}>Props</TabButton>
                        <TabButton onClick={handleClick}>State</TabButton>
                    </menu>
                </section>
            </main>
        </div>
    );
}

export default App;