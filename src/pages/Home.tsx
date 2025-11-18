import { profile } from "../data/profile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <section className="grid gap-10 md:grid-cols-2 items-center p-4 md:p-12">
      <Helmet>
        <title>{profile.name} — Portfolio</title>
        <meta name="description" content="Portfolio : IA, SIG, DevSecOps, Android." />
      </Helmet>

      {/* Text Content */}
      <div className="order-2 md:order-1">
        <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight">
          {profile.name}
        </h1>
        <p className="mt-3 text-2xl font-light text-indigo-400">
          {profile.role}
        </p>
        <p className="mt-6 text-lg text-gray-400 leading-relaxed">
          {profile.about}
        </p>

        {/* Call to Actions */}
        <div className="mt-8 flex gap-4">
          <Link 
            to="/projects" 
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/50"
          >
            Voir les Projets
          </Link>
          <Link 
            to="/contact" 
            className="px-6 py-3 border border-gray-600 text-gray-200 font-semibold rounded-full hover:bg-gray-800 transition-colors"
          >
            Contactez-moi
          </Link>
        </div>

        {/* Badges/Skills */}
        <div className="mt-10 flex flex-wrap gap-2 text-sm" aria-label="badges de parcours">
          <span className="rounded-full bg-gray-800 text-indigo-400 px-4 py-1.5 border border-indigo-500/30 font-medium">Master Technologie emergentes (2025)</span>
          
        </div>
      </div>

      {/* Profile Illustration/Image */}
      <div 
        className="order-1 md:order-2 w-full max-w-lg mx-auto rounded-3xl shadow-2xl border-4 border-indigo-500/50 transition-transform duration-500 hover:scale-[1.02] overflow-hidden" 
      >
        <img src="/profile.png" alt="Profile" className="object-cover w-full h-full" />
      </div>
    </section>
  );
}