import ProjectPanel from "./Components/Projects/ProjectPanel.jsx";
import AddProject from "./Components/Projects/AddProject.jsx";
import {useState} from "react";

function App() {
    const [isAddProject, setIsAddProject] = useState(false);
    function handleAddProjectClick(){
        setIsAddProject(prev => !prev)
    }
    return (
        <main className="h-screen my-8 flex gap-8">
            <ProjectPanel onClick={handleAddProjectClick}/>
            {isAddProject ? <AddProject/> : <p>No project view</p>}
        </main>
    );
}

export default App;
