import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const linkColor =
    activeSection === "home" ? "text-white" : "text-[#7FE3E3]";

  // Variantes con easing válido (cubic-bezier)
  const navVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] }, // "easeInOut" curva
    },
  };

  const linkVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.4,
        ease: [0.42, 0, 0.58, 1],
      },
    }),
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 z-50 bg-[#002B2B] border-b border-cyan-900/30"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center relative">
        {/* Nombre */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => onNavigate("home")}
          className="absolute left-6 text-[#A577BA] text-xl font-semibold hover:text-[#c88ae0] transition-colors"
        >
          Micaela
        </motion.button>

        {/* Enlaces */}
        <div className="flex gap-6 text-sm font-light">
          {["// Sobre mi //", "Experiencia //", "Proyectos //", "Contacto //"].map(
            (text, i) => (
              <motion.button
                key={text}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05, color: "#7FE3E3" }}
                onClick={() =>
                  onNavigate(
                    text.includes("Sobre") ? "about" :
                    text.includes("Experiencia") ? "experience" :
                    text.includes("Proyectos") ? "projects" :
                    "contact"
                  )
                }
                className={`transition-colors ${linkColor}`}
              >
                {text}
              </motion.button>
            )
          )}
        </div>
      </div>
    </motion.nav>
  );
}
