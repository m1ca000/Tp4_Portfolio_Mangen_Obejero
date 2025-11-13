import { useEffect, useState, useRef } from 'react';
import { Send } from 'lucide-react';

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    await new Promise(resolve => setTimeout(resolve, 1500));

    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({ nombre: '', email: '', mensaje: '' });

    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-linear-to-br from-[#AD85A7] via-[#9C6F95] to-[#AD85A7]"
    >
      <div className="max-w-2xl w-full">
        <h2
          className={`text-5xl font-bold text-white mb-12 transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Contactame
        </h2>

        <div
          className={`bg-[#B78FB1]/30 backdrop-blur-sm border-2 border-[#E0C7DC]/50 rounded-3xl p-8 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Nombre"
                required
                className="w-full px-6 py-4 bg-white rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C798C2] transition-all"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-6 py-4 bg-white rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C798C2] transition-all"
              />
            </div>

            <div>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Mensaje"
                required
                rows={6}
                className="w-full px-6 py-4 bg-white rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C798C2] transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-[#9C6F95]/70 hover:bg-[#9C6F95]/90 text-white rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-[#C798C2]/50 hover:border-[#E0C7DC]/60"
            >
              {isSubmitting ? (
                <span className="animate-pulse">Enviando...</span>
              ) : submitStatus === 'success' ? (
                <span className="flex items-center gap-2">
                  ¡Enviado! ✓
                </span>
              ) : (
                <>
                  Enviar
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {submitStatus === 'success' && (
            <div className="mt-4 p-4 bg-emerald-500/20 border border-emerald-400/50 rounded-lg text-emerald-200 text-center animate-fadeIn">
              ¡Mensaje enviado exitosamente!
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
