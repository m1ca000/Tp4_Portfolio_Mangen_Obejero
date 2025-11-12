interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Navigation({ onNavigate }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a2a2a] border-b border-cyan-900/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => onNavigate('hero')}
          className="text-cyan-400 text-xl font-bold hover:text-cyan-300 transition-colors"
        >
          Micaela
        </button>
        <div className="flex gap-6 text-sm">
          <button
            onClick={() => onNavigate('about')}
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            // Sobre mi //
          </button>
          <button
            onClick={() => onNavigate('experience')}
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Experiencia //
          </button>
          <button
            onClick={() => onNavigate('projects')}
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Proyectos //
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Contacto //
          </button>
        </div>
      </div>
    </nav>
  );
}
