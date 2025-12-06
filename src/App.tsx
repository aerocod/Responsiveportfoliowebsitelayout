import { Hero } from './components/Hero';
import { ProjectGallery } from './components/ProjectGallery';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <Hero />
      <ProjectGallery />
      <Skills />
      <Contact />
    </div>
  );
}
