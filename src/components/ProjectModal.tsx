import React from "react";
import type { Project } from "../data/projects";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  if (!isOpen || !project) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 rounded-lg shadow-xl relative max-w-2xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
          <p className="text-gray-300 whitespace-pre-wrap">{project.summary}</p>
          
          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            {project.tags.map(t => 
              <span 
                key={t} 
                className="bg-indigo-900/40 text-indigo-300 rounded-full px-3 py-1 font-medium"
              >
                {t}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="mt-5 pt-3 border-t border-gray-700 flex gap-4 text-sm font-semibold">
            {project.repo && (
              <a 
                className="text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-1" 
                href={project.repo} 
                target="_blank" 
                rel="noreferrer"
              >
                Code
              </a>
            )}
          </div>
        </div>
        <button
          className="absolute top-3 right-3 text-white bg-gray-700 hover:bg-gray-600 rounded-full p-2 transition-colors"
          onClick={onClose}
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
