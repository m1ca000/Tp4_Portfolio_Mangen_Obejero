export default function Projects() {
  const projects = [
    {
      title: 'Abriendo oportunidades',
      description: 'Abriendo oportunidades fue un proyecto desarrollado en 2023 en el ambito escolar con el objetivo de ayudar a aquellos niños que no pueden asistir a la escuela por diferentes razones (ya sea por enfermedad u otras cosas). Consistia en una aplicación de juegos educativos diseñado para chicos de 1ero, 2do y 3er grado de primaria.'
    },
    {
      title: 'CentinelAI',
      description: 'CentinelAi es un proyecto desarrollado en el ambito escolar tanto en 2024, como 2025. En estos años el proyecto tuvo un cambio rotundo de idea. En una primera instancia era un sistema de camaras de seguridad inteligentes con otras funciones como cerraduras magneticas. Luego nos dimos cuenta de que esto no era efectivo asi que decidimos cambiar el enfoque a un sistema de control de acceso inteligente con uso de IA y molinetes.'
    },
    {
      title: 'Abuelos 3.0',
      description: 'Abuelos 3.0 es un proyecto organizado por la escuela ort que se basa en ayudar a gente mayor con sus dudas tecnologicas. Participe de este proyecto en el año 2024'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0a2a2a] py-20 px-6">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-16">
          Proyectos
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {projects.slice(0, 2).map((project, index) => (
            <div
              key={index}
              className="border-2 text-[#A577BA] rounded-lg p-8 bg-[#0a2a2a] hover:bg-[#0d3333] transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-white text-2xl font-bold mb-4">
                {project.title}
              </h3>
              <p className="text-white/90 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="w-full md:w-2/3 border-2 text-[#A577BA] rounded-lg p-8 bg-[#0a2a2a] hover:bg-[#0d3333] transition-all duration-300 hover:scale-105">
            <h3 className="text-white text-2xl font-bold mb-4">
              {projects[2].title}
            </h3>
            <p className="text-white/90 leading-relaxed">
              {projects[2].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
