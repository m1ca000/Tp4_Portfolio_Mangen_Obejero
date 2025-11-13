import { useEffect, useState, useRef } from 'react';
import { Server, Monitor, Palette } from 'lucide-react';

const experiences = [
  {
    icon: Server,
    title: 'Back-end',
    description: 'Experiencia tanto en programación funcional como orientada a objetos C#, C, Python, JavaScript, TypeScript.',
    color: 'from-slate-600 to-slate-700'
  },
  {
    icon: Monitor,
    title: 'Front-end',
    description: 'Experiencia en desarrollo con HTML, CSS, JS, React y NextJS.',
    color: 'from-slate-600 to-slate-700'
  },
  {
    icon: Palette,
    title: 'Diseño',
    description: 'Experiencia en desarrollo de diseños para imprimir en 3D y desarrollo en páginas web.',
    color: 'from-slate-600 to-slate-700'
  }
];

function Experience() {
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
      id="experience"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-slate-900"
    >
      <div className="max-w-7xl w-full">
        <h2
          className={`text-5xl font-bold text-white mb-16 transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Experiencia
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-slate-800/40 backdrop-blur-sm border-2 border-slate-700/50 rounded-2xl p-8 h-full hover:border-amber-300/70 hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 bg-linear-to-br ${exp.color} rounded-lg`}>
                    <exp.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                </div>

                <p className="text-slate-200 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
