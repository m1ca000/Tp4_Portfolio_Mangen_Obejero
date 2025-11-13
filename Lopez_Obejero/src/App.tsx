import { useState, useEffect } from 'react';
import Hero from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-purple-900 via-purple-800 to-purple-900">
      <nav className="fixed top-0 w-full bg-purple-900/80 backdrop-blur-md z-50 border-b border-purple-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Morena</h1>
          <div className="flex gap-8">
            {[
              { id: 'experience', label: 'Experiencia' },
              { id: 'projects', label: 'Proyectos' },
              { id: 'contact', label: 'Contactame' }
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-white hover:text-amber-300 transition-colors ${
                  activeSection === id ? 'text-amber-300' : ''
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
