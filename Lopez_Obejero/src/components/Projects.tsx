import { useEffect, useState, useRef } from 'react';
import { Image } from 'lucide-react';

const projects = [
  {
    title: 'Impulsar+',
    description: 'Impulsar+ es una plataforma web inclusiva que ayuda a personas neurodivergentes, especialmente dentro del espectro autista, a emprender. Permite compartir experiencias, buscar financiación, planificar y gestionar sus proyectos, promoviendo la independencia económica y la inclusión real.'
  },
  {
    title: 'Sportconnect',
    description: 'Sportconnect es una plataforma web en la que podrás conectar con otras personas que tengan ganas de jugar al fútbol. Si ves que te faltan personas para un partido que vayas a disputar o te sientes aburrido haciendo deporte tú solo, ¡este es tu sitio!'
  },
  {
    title: 'Abuelos 3.0',
    description: 'Abuelos 3.0 es un proyecto organizado por la escuela en que se basa en ayudar a gente mayor con sus dudas tecnológicas. Participé de este proyecto en el año 2024'
  },
  {
    title: 'Abriendo oportunidades',
    description: 'Abriendo oportunidades es un proyecto que tiene el objetivo de crear conciencia social y ayudar a aquellos niños que no pueden asistir a la escuela por diferentes razones (ya sea por enfermedad u otras cosas). Consiste en un sitio web de juegos educativos diseñado para chicos de 1ero, 2do y 3er grado de primaria.'
  }
];

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-slate-800"
    >
      <div className="max-w-7xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          <div>
            <h2
              className={`text-5xl font-bold text-white mb-8 transform transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Proyectos
            </h2>
            <p
              className={`text-lg text-slate-200 leading-relaxed transform transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Soy una desarrolladora con experiencia en Python, JavaScript y C#, enfocada en
              crear soluciones tecnológicas innovadoras, accesibles y con impacto social.
            </p>
          </div>

          <div
            className={`bg-slate-700/30 backdrop-blur-sm border-2 border-slate-600/50 rounded-lg aspect-video flex items-center justify-center transform transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Image className="w-20 h-20 text-slate-500" />
          </div>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`border-l-4 border-amber-300 pl-6 transform transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${(index + 4) * 150}ms` }}
            >
              <h3 className="text-2xl font-bold text-white mb-3 hover:text-amber-300 transition-colors cursor-pointer">
                -- {project.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
