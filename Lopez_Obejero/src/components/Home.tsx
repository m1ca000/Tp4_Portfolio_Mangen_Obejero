import { useEffect, useState } from "react";
import { Code, Sparkles } from "lucide-react";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 bg-linear-to-r from-[#B48EBF] to-[#704C69]"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Izquierda: Ilustración animada */}
        <div
          className={`space-y-6 transform transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Morena
          </h1>

          <div className="relative w-full max-w-md h-64 bg-[#9C75A7]/40 rounded-lg p-6 backdrop-blur-sm border border-[#DAB8DA]/30 shadow-lg">
            <div className="absolute top-8 left-8 w-32 h-32 bg-[#E5C9E5]/70 rounded-full transform -rotate-12 animate-float">
              <div className="absolute inset-0 flex items-center justify-center">
                <Code className="w-16 h-16 text-[#704C69]" />
              </div>
            </div>

            <div className="absolute top-12 right-12 space-y-2">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-3 bg-[#E5C9E5]/70 rounded animate-slideIn"
                  style={{
                    width: `${Math.random() * 60 + 40}px`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>

            <div className="absolute bottom-8 left-12 w-24 h-16 bg-[#B48EBF]/40 rounded transform rotate-6">
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#E5C9E5] rounded-full animate-pulse" />
            </div>

            <Sparkles className="absolute top-4 right-4 w-6 h-6 text-[#E5C9E5] animate-spin-slow" />
            <Sparkles className="absolute bottom-16 left-4 w-4 h-4 text-[#E5C9E5] animate-pulse" />
          </div>
        </div>

        {/* Derecha: Descripción */}
        <div
          className={`space-y-6 transform transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-lg text-white leading-relaxed">
            Soy una desarrolladora apasionada por la tecnología y su capacidad
            para generar impacto social. A lo largo de los años, he adquirido
            experiencia programando en Python, JavaScript y C#, participando en
            proyectos que combinan innovación, accesibilidad e inclusión. Como
            estudiante motivada y en constante aprendizaje, busco seguir
            perfeccionando mis habilidades para crear soluciones digitales que
            sean útiles, empáticas y transformadoras.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
