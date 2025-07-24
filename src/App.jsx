import ProjectPanel from "./Components/Projects/ProjectPanel.jsx";
import AddProject from "./Components/Projects/AddProject.jsx";
import {useState} from "react";
import NoProjectSelected from "./Components/Projects/NoProjectSelected.jsx";

function App() {
    const [isAddProject, setIsAddProject] = useState(false);
    const [projectState, setProjectState] = useState({
        selectedProjectId: undefined,
        projects: []
    });

    function handleStartAddProject() {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: null
            }
        })
    }

    let content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>;
    if (projectState.selectedProjectId === null)
        content = <AddProject/>;

    return (
        <main className="h-screen my-8 flex gap-8">
            <ProjectPanel onStartAddProject={handleStartAddProject}/>
            {content}
        </main>
    );
}

export default App;
