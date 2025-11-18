import type { Certification } from "../data/certifications";

const CertificationCard = ({ c }: { c: Certification }) => (
    <article className="bg-gray-900 rounded-xl p-5 border border-gray-800 transition-all duration-300 hover:shadow-2xl hover:border-teal-600/50 hover:-translate-y-1 cursor-pointer">
      <h3 className="font-bold text-lg text-white line-clamp-1">{c.title}</h3>
      <p className="text-sm text-gray-400 mt-1">{c.issuer}</p>
      <p className="text-xs text-indigo-400 mt-2">Délivré: {c.issueDate}</p>
      <div className="mt-3 flex flex-wrap gap-1 text-xs">
          {(c.tags || []).slice(0, 3).map(t => (
              <span key={t} className="bg-gray-800 text-gray-400 rounded-full px-2 py-0.5">{t}</span>
          ))}
      </div>
    </article>
);

export default CertificationCard;