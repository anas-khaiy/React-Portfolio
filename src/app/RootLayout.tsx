import { Outlet, NavLink } from "react-router-dom";
import { profile } from "../data/profile";

const navItems = [
    { path: '/', name: 'Accueil' },
    { path: '/projects', name: 'Projets' },
    { path: '/education', name: 'Formations' },
    { path: '/certifications', name: 'Certifications' },
    { path: '/contact', name: 'Contact' },
];

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-100 font-sans antialiased">
        
      {/* Navigation Bar */}
      <header className="sticky top-0 z-10 bg-gray-900 border-b border-gray-800 shadow-xl">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap justify-between items-center">
          <h1 className="text-xl font-bold text-white tracking-wider">
            {profile.name}
          </h1>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm mt-3 md:mt-0">
            {navItems.map(item => (
              <NavLink 
                key={item.path} 
                to={item.path} 
                className={({ isActive }) => 
                  `pb-1 transition-colors duration-200 ${
                    isActive ? "text-indigo-400 border-b-2 border-indigo-400 font-semibold" : "text-gray-400 hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl mx-auto">
        <Outlet />
      </main>
      
      {/* Footer */}
      <footer className="p-8 text-center border-t border-gray-800 bg-gray-900">
          <p className="text-sm text-gray-500">
              Portfolio | © {new Date().getFullYear()} {profile.name}
          </p>
      </footer>
      
    </div>
  );
}