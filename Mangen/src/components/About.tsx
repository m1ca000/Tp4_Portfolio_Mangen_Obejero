import { Star } from 'lucide-react';

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0a2a2a] py-20 px-6">
      <div className="max-w-4xl relative">
        <Star className="absolute -top-10 -left-10 text-cyan-400 w-16 h-16 fill-cyan-400" />
        <Star className="absolute top-20 -right-10 text-cyan-400 w-12 h-12 fill-cyan-400" />
        <Star className="absolute -bottom-10 left-20 text-cyan-400 w-14 h-14 fill-cyan-400" />
        <Star className="absolute bottom-32 -right-16 text-cyan-400 w-20 h-20 fill-cyan-400" />

        <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-12">
          Sobre mi
        </h2>

        <div className="space-y-6 text-white text-center text-lg leading-relaxed">
          <p>
            Soy una estudiante y desarrolladora fullstack apasionada por la tecnología y el aprendizaje
            constante. Me encanta crear proyectos que unan la lógica con la creatividad, y disfrutar del proceso de
            dar vida a ideas desde cero.
          </p>
          <p>
            Me motiva seguir creciendo, aprender cosas nuevas cada día y trabajar en equipo con personas que
            compartan la misma curiosidad por construir soluciones que marquen una diferencia.
          </p>
        </div>
      </div>
    </section>
  );
}
