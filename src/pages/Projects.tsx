import { useState } from "react";
import { projects, type Project } from "../data/projects";
import ProjectModal from "../components/ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="grid gap-8 p-4 md:p-8">
      <h2 className="text-4xl font-extrabold text-white tracking-tight border-b border-gray-800 pb-4">
        Projets Récents ✨
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => (
          <article
            key={p.title}
            className="bg-gray-900 rounded-xl p-5 border border-gray-800 transition-all duration-300 hover:shadow-2xl hover:border-indigo-600/50 hover:-translate-y-1 cursor-pointer"
            onClick={() => openModal(p)}
          >
            <h3 className="font-bold text-xl text-white">{p.title}</h3>
            <p className="text-sm text-gray-400 mt-2 line-clamp-3">{p.summary}</p>
            
            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              {p.tags.map(t => 
                <span 
                  key={t} 
                  className="bg-indigo-900/40 text-indigo-300 rounded-full px-3 py-1 font-medium"
                >
                  {t}
                </span>
              )}
            </div>
            
            {/* Links */}
            <div className="mt-5 pt-3 border-t border-gray-800 flex gap-4 text-sm font-semibold">
              {p.repo && (
                <a 
                  className="text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-1" 
                  href={p.repo} 
                  target="_blank" 
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()} // Prevent modal from opening when clicking code link
                >
                  Code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={closeModal}
        project={selectedProject}
      />
    </section>
  );
}