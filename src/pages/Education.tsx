import { education } from "../data/education";


function fmt(s: string | null | undefined) { 
  if(!s) return "Présent"; 
  const [y,m]=s.split("-"); 
  return `${m}/${y}`; 
}

export default function EducationPage() {
  return (
    <section className="grid gap-8 p-4 md:p-8">
      <h2 className="text-4xl font-extrabold text-white tracking-tight border-b border-gray-800 pb-4">
        Formations 📚
      </h2>
      <ol className="relative border-s border-gray-700">
        {education.map(e=>(
          <li key={e.school+e.start} className="ms-6 mb-10 p-4 bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-800">
            <span className="absolute flex items-center justify-center w-3 h-3 bg-indigo-500 rounded-full -start-1.5 ring-4 ring-gray-950" />
            
            <h3 className="font-bold text-xl text-white">
              {e.degree}{e.field?` — ${e.field}`:""}
            </h3>
            
            <p className="text-sm font-medium text-indigo-400 mt-1">
              {e.school}
            </p>
            
            <p className="text-sm text-gray-400 mt-1">
               {fmt(e.end)} 
            </p>
            
            {e.courses?.length ? (
              <p className="mt-4 text-sm text-gray-300 border-t border-gray-800 pt-3">
                <span className="font-semibold text-gray-200">Cours Clés:</span> {e.courses.slice(0,5).join(", ")}
              </p>
            ) : null}
            
            {e.highlights?.length ? (
              <ul className="list-disc ms-5 mt-3 text-sm text-gray-400">
                {e.highlights.map(h=><li key={h} className="mt-1">{h}</li>)}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}