import { Mail, Phone, Github } from 'lucide-react';

function Contact() {
  return (
    <section className="grid gap-8 p-4 md:p-8">
      <h2 className="text-4xl font-extrabold text-white tracking-tight border-b border-gray-800 pb-4">
        Me Contacter 📬
      </h2>
      
      <div className="bg-gray-900 rounded-2xl p-8 max-w-3xl mx-auto w-full border border-gray-800 shadow-xl">
        <p className="text-xl text-gray-300 mb-6 text-center">
          Je suis ouvert aux opportunités de travail et aux collaborations. Envoyez-moi un message!
        </p>
        
        <div className="grid gap-6 mb-8">
          {/* Email */}
          <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <Mail className="text-indigo-400" size={24} />
            <a href="mailto:alex.dupont@example.com" className="text-gray-200 hover:text-indigo-400 transition-colors">anaskhaiy7@gmail.com</a>
          </div>

          {/* Phone (Optional) */}
          <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <Phone className="text-indigo-400" size={24} />
            <a href="tel:+33612345678" className="text-gray-200 hover:text-indigo-400 transition-colors">06 29 29 35 75</a>
          </div>

          
          
          
          

          {/* GitHub (from profile data) */}
          <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
            <Github className="text-indigo-400" size={24} />
            <a href="https://github.com/anas-khaiy" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-indigo-400 transition-colors">anas-khaiy</a>
          </div>
        </div>
        
        <p className="text-center text-sm text-gray-500 mt-6">
          N'hésitez pas à me contacter via l'un de ces moyens!
        </p>
      </div>
    </section>
  );
}

export default Contact;