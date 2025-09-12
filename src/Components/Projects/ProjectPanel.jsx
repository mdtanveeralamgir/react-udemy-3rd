import AddProjectButton from "../Buttons/AddProjectButton.jsx";

export default function ProjectPanel({onStartAddProject, allProjects, onSelectProject, selectedProjectId}) {
    return <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Project</h2>
        <div>
            <AddProjectButton onClick={onStartAddProject}>+ Add Project</AddProjectButton>
        </div>
        <ul className="mt-8">
            {allProjects.map(project => {
                let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
                if (project.id === selectedProjectId)
                    cssClasses += " bg-stone-800 text-stone-200";
                else
                    cssClasses += " text-stone-400";

                return (
                    <li key={project.id}>
                        <button onClick={() => onSelectProject(project.id)} className={cssClasses}>{project.title}</button>
                    </li>
                )
            })}
        </ul>
    </aside>;
}