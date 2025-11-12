import { useState } from 'react';
import Hero from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Navigation from './components/Navigation';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a2a2a]">
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
      <div id="hero"><Hero /></div>
      <div id="about"><About /></div>
      <div id="experience"><Experience /></div>
      <div id="projects"><Projects /></div>
    </div>
  );
}

export default App;
