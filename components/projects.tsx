import ProjectCard from './ProjectCard'

const projectsData: IProject[] = [
  {
    title: 'FUT-433',
    imageSrc: '/fantasy.jpg',
    year: 'Atual',
    description:
      'Este site de fantasy football é o lugar perfeito para você e seus amigos montarem seus times e competirem para ver quem soma mais pontos. Crie ligas, escolha seus jogadores favoritos e acompanhe a performance de cada um ao longo da temporada. Com uma interface amigável e atualizações em tempo real, você pode desafiar seus amigos e se divertir competindo para descobrir quem é o melhor manager de futebol. Ideal para momentos de diversão e, quem sabe, até para apostas entre amigos.',
    overview:
      'Parte do desenvolvimento principal deste site de busca de tênis. Identificar melhorias e refatorar o código com melhores práticas, utilizando TypeScript. Implementação de scraping de dados e exibição dinâmica de produtos.',
    skills: [
      'Manipulação da DOM',
      'Programação Orientada a Objetos (POO)',
      'Gerenciamento de containers Docker',
    ],
    technologies: [
      'NextJs',
      'TypeScript',
      'Eslint',
      'Styled Components',
      'Axios',
      'ChartJs',
      'React ChartJs 2',
      'NodeJs',
      'Express',
      'MySql 2',
      'Puppeteer',
      'Docker',
    ],
    showcaseImage: '/select-team.png',
    githubLink: 'https://github.com/ewerton11/sneakerhead-web',
  },
  {
    title: 'SNEAKERHEAD-WEB',
    imageSrc: '/sneaker.jpg',
    year: '2023',
    description:
      'Este site facilita a busca pelos tênis ideais, realizando busca em diferentes sites como Nike e Adidas. Com soluções inteligentes, você encontra tênis de diversos estilos, preços e descontos, além de acessar um histórico de preços detalhado. Outros sites podem ser adicionados para expandir suas opções de busca.',
    overview:
      'Parte do desenvolvimento principal deste site de busca de tênis. Identificar melhorias e refatorar o código com melhores práticas, utilizando TypeScript. Implementação de scraping de dados e exibição dinâmica de produtos.',
    skills: [
      'Manipulação da DOM',
      'Programação Orientada a Objetos (POO)',
      'Gerenciamento de containers Docker',
    ],
    technologies: [
      'NextJs',
      'TypeScript',
      'Eslint',
      'Styled Components',
      'Axios',
      'ChartJs',
      'React ChartJs 2',
      'NodeJs',
      'Express',
      'MySql 2',
      'Puppeteer',
      'Docker',
    ],
    showcaseImage: '/projectSneakerhead.png',
    githubLink: 'https://github.com/ewerton11/sneakerhead-web',
  },
  {
    title: 'BEST MOMENTS SOCCER',
    imageSrc: '/estadio-de-futebol.jpg',
    year: '2023',
    description:
      'Este site facilita a busca pelos tênis ideais, realizando busca em diferentes sites como Nike e Adidas. Com soluções inteligentes, você encontra tênis de diversos estilos, preços e descontos, além de acessar um histórico de preços detalhado. Outros sites podem ser adicionados para expandir suas opções de busca.',
    overview:
      'Parte do desenvolvimento principal deste site de busca de tênis. Identificar melhorias e refatorar o código com melhores práticas, utilizando TypeScript. Implementação de scraping de dados e exibição dinâmica de produtos.',
    skills: [
      'Manipulação da DOM',
      'Programação Orientada a Objetos (POO)',
      'Gerenciamento de containers Docker',
    ],
    technologies: [
      'NextJs',
      'TypeScript',
      'Eslint',
      'Styled Components',
      'Axios',
      'ChartJs',
      'React ChartJs 2',
      'NodeJs',
      'Express',
      'MySql 2',
      'Puppeteer',
      'Docker',
    ],
    showcaseImage: '/best-moments-soccer.png',
    githubLink: 'https://github.com/ewerton11/sneakerhead-web',
  },
  // Adicione mais projetos aqui
]

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen" id="projects">
      {projectsData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  )
}

export default Projects
