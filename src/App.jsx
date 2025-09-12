import ProjectPanel from "./Components/Projects/ProjectPanel.jsx";
import AddProject from "./Components/Projects/AddProject.jsx";
import {useState} from "react";
import NoProjectSelected from "./Components/Projects/NoProjectSelected.jsx";
import SelectedProject from "./Components/Projects/SelectedProject.jsx";

function App() {
    const [projectState, setProjectState] = useState({
        selectedProjectId: undefined,
        projects: [],
        tasks: []
    });

    function handleAddTask(task) {

        setProjectState(prevState => {
            const newTask = {
                text: task,
                selectedProjectId: prevState.selectedProjectId,
                id: Math.random()
            }
            return {
                ...prevState,
                tasks: [newTask, ...prevState.tasks]
            }
        });
    }

    function handleDeleteTask(taskID) {
        setProjectState(prevState => {
            return {
                ...prevState,
                tasks: prevState.tasks.filter(task => task.id !== taskID)
            }
        })
    }

    function handleSelectProject(projectId) {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: projectId
            }
        })
    }

    function handleDeleteProject() {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectId)
            }
            // prevState.projects.map(project => project.selectedProjectId === prevState.selectedProjectId)
        })
    }

    function handleStartAddProject() {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: null
            }
        })
    }

    function handleAddProject(projectData) {
        const newProject = {
            ...projectData,
            id: Math.random()
        }
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: [...prevState.projects, newProject]
            }
        })
    }

    function handleAddCancelProject() {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined,
            }
        })
    }

    let content;
    if (projectState.selectedProjectId === undefined)
        content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>;
    else if (projectState.selectedProjectId == null) {
        content = <AddProject onCancelClick={handleAddCancelProject} onAddProjectClick={handleAddProject}/>;
    } else {
        const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);
        const tasks = projectState.tasks.filter(task => task.selectedProjectId === selectedProject.id);
        content = <SelectedProject tasks={tasks} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask}
                                   onHandleDelete={handleDeleteProject} project={selectedProject}/>
    }

    return (
        <main className="h-screen my-8 flex gap-8">
            <ProjectPanel
                onSelectProject={handleSelectProject}
                allProjects={projectState.projects}
                onStartAddProject={handleStartAddProject}
                selectedProjectId={projectState.selectedProjectId}
            />
            {content}
        </main>
    );
}

export default App;
