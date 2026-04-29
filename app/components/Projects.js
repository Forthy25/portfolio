import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Space Invaders",
      image: "/invaders-screen.png",
      description:
        "Mein erstes Projekt aus dem ersten Monat meiner Coding-Reise! Es hat Spaß gemacht, die Grundlagen von Vanilla JS und Logik zu lernen. Ich nahm ein einfaches Tutorial und experimentierte – passte die Steuerung und das Gefühl des Spiels an. Ein erfüllender Start in die Webentwicklung.",
      githubUrl: "https://github.com/Forthy25/space-invaders",
      liveUrl: "https://forthy25.github.io/space-invaders/",
    },
    {
      id: 2,
      title: "Dashboard",
      image: "/dashboard-screen.png",
      description:
        "Full-Stack Battlefield-Statistik-Dashboard. Mein zweites Projekt zum Erforschen von Backend-Technologien: Node.js, Express, MongoDB, Authentifizierung und Datenvisualisierung. Mit Live-Demo und Mock-Daten.",
      githubUrl: "https://github.com/Forthy25/Battlefield-Dashboard",
      liveUrl: "https://battlefield-dashboard.vercel.app/",
    },
    {
      id: 3,
      title: "Watchbase",
      image: "/watchbase-screen.png",
      description:
        "Interaktiver Film- und Serien-Watchlist-Manager, gebaut mit React 19, Vite & Tailwind. Mit Trending-Discovery via TMDB API, Drag-and-Drop-Organisation, intelligenter Suche und lokalem Speicher.",
      githubUrl: "https://github.com/Forthy25/watchBase",
      liveUrl: "https://watch-base.vercel.app/",
    },
  ];

  const ProjectCard = ({ project }) => (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
      <div className="relative h-64 overflow-hidden bg-gray-200">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-center hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-col gap-3 w-full">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition w-full"
          >
            GitHub
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center px-4 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition w-full"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Meine Projekte
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
