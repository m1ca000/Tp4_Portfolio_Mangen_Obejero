import { Linkedin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0a2a2a] py-20 px-6">
      <div className="max-w-2xl w-full">
        <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-16">
          Contacto
        </h2>

        <div className="border-2 text-[#A577BA] rounded-lg p-12 bg-[#0a2a2a]">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
                <Linkedin className="w-6 h-6 text-cyan-400" />
                <a
                    href="https://www.linkedin.com/in/micaela-mangen-168906341/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-lg hover:text-cyan-400 transition-colors"
                >
                    LinkedIn: Micaela Mangen
                </a>
            </div>


            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-cyan-400" />
              <a
                href="mailto:micaela.mangen@gmail.com"
                className="text-white text-lg hover:text-cyan-400 transition-colors"
              >
                Email: micaela.mangen@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-cyan-400" />
              <a
                href="tel:+5491126530471"
                className="text-white text-lg hover:text-cyan-400 transition-colors"
              >
                Phone: +54 9 11 2653 0471
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
