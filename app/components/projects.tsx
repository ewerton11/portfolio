import projectsData from '../data/projectsData'
import ProjectCard from './projectCard'

export default function Projects() {
  return (
    <div className="flex flex-col items-center min-h-screen" id="projects">
      {projectsData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  )
}
