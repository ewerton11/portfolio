'use client'

import Header from '@/app/components/header'
import projectsData from '@/app/data/projectsData'
import { useRouter } from 'next/navigation'

export default function Works() {
  const router = useRouter()

  const handleProjectClick = (title: string) => {
    const slug = title.toLowerCase().replace(/ /g, '-')
    router.push(`pages/work/${slug}`)
  }

  return (
    <div className="w-full flex flex-col relative bg-primary-dark items-center min-h-screen">
      <Header />
      <div className="w-full flex flex-1 relative">
        <div className="font-roboto absolute bottom-0 right-[6%] w-2/5 h-4/5 flex flex-col justify-center">
          <h1 className="text-6xl pb-10 mb-10 border-b border-white">
            Projetos
          </h1>
          <div className="w-full">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="w-full flex justify-between items-end mb-6"
              >
                <p
                  className="text-4xl cursor-pointer hover:text-offWhite"
                  onClick={() => handleProjectClick(project.title)}
                >
                  {project.title}
                </p>
                <p className="text-xl">{`Dev. ${project.experience}`}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
