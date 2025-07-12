import TabButton from "../Wrapper/TabButton";
import {EXAMPLES} from "../../data";
import {useState} from "react";
import Section from "../../Section";
import Tabs from "../Wrapper/Tabs";

export default function Examples() {
    //hooks must be called inside component functions
    //cannot be called inside any other statements (if, switch, for)
    const [selectedTopic, setSelectedTopic] = useState();

    //Now need to know which button was clicked by the param
    function handleClick(clickedButton) {
        //Hooks cannot be called inside an inner function
        //useState(); //wrong
        setSelectedTopic(clickedButton);
    }

    let tabContent = <p>Please select a topic.</p>;
    if (selectedTopic) {
        tabContent = <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre><code>{EXAMPLES[selectedTopic].code}</code></pre>
        </div>;
    }


    const tabButtons = <>
        <TabButton onClick={() => handleClick('components')}
                   isSelected={selectedTopic === 'components'}>Components</TabButton>
        <TabButton onClick={() => handleClick('jsx')}
                   isSelected={selectedTopic === 'jsx'}>JSX</TabButton>
        <TabButton onClick={() => handleClick('props')}
                   isSelected={selectedTopic === 'props'}>Props</TabButton>
        <TabButton onClick={() => handleClick('state')}
                   isSelected={selectedTopic === 'state'}>State</TabButton>
    </>
    return (<Section title="Example" id="examples">
        <Tabs buttons={tabButtons}>
            {tabContent}
        </Tabs>
    </Section>);
}