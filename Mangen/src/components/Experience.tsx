import { Monitor, Atom, Database } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      icon: Monitor,
      title: 'Software development',
      description: 'Experiencia tanto en programación funcional como orientada a objetos: C#, C, Python, JavaScript, TypeScript.'
    },
    {
      icon: Atom,
      title: 'Frontend',
      description: 'Experiencia en desarrollo con HTML, CSS, JS, React y NextJS.'
    },
    {
      icon: Database,
      title: 'Backend',
      description: 'Experiencia en desarrollo con SQL, Prisma ORM, JS y TS.'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0a2a2a] py-20 px-6">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-16">
          Experiencia
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div
                key={index}
                className="border-2 text-[#A577BA] rounded-lg p-8 bg-[#0a2a2a] hover:bg-[#0d3333] transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Icon className="w-10 h-10 text-cyan-400" strokeWidth={1.5} />
                  <h3 className="text-cyan-400 text-xl font-semibold">
                    {exp.title}
                  </h3>
                </div>
                <p className="text-white leading-relaxed">
                  {exp.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
