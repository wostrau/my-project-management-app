import Button from './Button';

export default function ProjectsSidebar({
  onStartAddProject,
  onSelectProject,
  selectedProjectId,
  projects,
}) {
  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
      <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className='mt-8'>
        {projects.map((project) => {
          let buttonClasses =
            'w-full text-left px-2 py-1 rounded-sm my-1 hover: hover:bg-stone-800';

          if (project.id === selectedProjectId) {
            buttonClasses += ' bg-stone-800 text-stone-200';
          } else {
            buttonClasses += ' text-stone-400';
          }

          return (
            <li key={project.id}>
              <button
                className={buttonClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
