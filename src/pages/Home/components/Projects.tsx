import { projects } from "../../../constants"

const Projects = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-4xl text-center">Projects</h1>

      {projects.map((project, index) => (
      <div key={index} className="flex mb-8 flex-wrap justify-center">
      <div className="w-full lg:w-1/4">
        <img className="mb-2 w-100 h-60 rounded-sm" src={project.img} />
      </div>
      <div className="w-full max-w-xl lg:w-3/4">
        <h6 className="mb-2 font-semibold">{project.title}</h6>
        <p className="mb-4">{project.description}</p>
        {project.tech.map((tech, index) => (
          <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
            {tech}
          </span>
        ))}
      </div>
    </div>
      ))}
    </div>
  )
}

export default Projects
