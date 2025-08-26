export const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Nlw-Connect",
      languages: ["React - ", "NextJS - ", "NodeJS - ", "Fastify "],
      url: "https://github.com/iegabriellll/Nlw-Connect",
    },
    {
      id: 3,
      name: "Pricing-Panel",
      languages: ["HTML - ", "CSS - ", "BootStrap"],
      url: "https://github.com/iegabriellll/Pricing-Panel",
    },
    {
      id: 2,
      name: "Quiz-React",
      languages: ["React - ", "CSS - ", "JavaScript "],
      url: "https://github.com/iegabriellll/Quiz-Reactt",
    },
    {
      id: 4,
      name: "Form-Steps",
      languages: ["React - ", "CSS - ", "JavaScript "],
      url: "https://github.com/iegabriellll/Formulario-Steps",
    },
    {
      id: 5,
      name: "Refri Dev",
      languages: ["HTML - ", "CSS - ", "JavaScript "],
      url: "https://github.com/iegabriellll/Refri-Dev.git",
    },
    {
      id: 6,
      name: "Cardapio Hamburgueria",
      languages: ["HTML - ", "TailwindCSS - ", "JavaScript "],
      url: "https://github.com/iegabriellll/Cardapio-LucasDev.git",
    },
    {
      id: 7,
      name: "Spotify Clone",
      languages: ["HTML - ", "CSS"],
      url: "https://github.com/iegabriellll/Spotify-Clone.git",
    },
    {
      id:8,
      name: "Clone Twitter/X",
      languages: ["NextJS - ", "TypeScript - ", "TailwindCSS "],
      url: "https://github.com/iegabriellll/Clone-Twitter-X.git",
    },
    {
      id:9,
      name: "Apple Watch,
      languages: ["React - ", "JavaScript - "],
      url: "https://github.com/iegabriellll/Apple-Watch.git",
    },
  ];

  return (
    <ul className="flex items-center justify-start flex-wrap gap-4">
      {projects.map((project) => (
        <a
          key={project.id}
          href={project.url}
          target="_blank"
          className="py-3 px-4 rounded-md border lg:w-[300px] border-gray-500 space-y-5 w-full"
        >
          <header className="flex items-center justify-between">
            <span className="text-blue-500">{project.name}</span>
            <span className="text-sm py-1 px-3 rounded-2xl border border-gray-500">
              Public
            </span>
          </header>
          <span className="flex items-center gap-3 space-x-4 text-xs font-light text-gray-200">
            {project.languages}
          </span>
        </a>
      ))}
    </ul>
  );
};
