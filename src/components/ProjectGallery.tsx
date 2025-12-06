import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    id: 1,
    title: 'CryptoVault Dashboard',
    category: 'Fintech',
    image: 'https://images.unsplash.com/photo-1689443111384-1cf214df988a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjB0ZWNobm9sb2d5JTIwYWJzdHJhY3R8ZW58MXx8fHwxNzY0OTkwODc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    span: 'lg:col-span-2 lg:row-span-2'
  },
  {
    id: 2,
    title: 'PayFlow Mobile',
    category: 'Fintech',
    image: 'https://images.unsplash.com/photo-1726137065519-c9a1b9eca951?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwZGlnaXRhbCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjQ5OTA4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    span: 'lg:col-span-1 lg:row-span-1'
  },
  {
    id: 3,
    title: 'DesignStudio Pro',
    category: 'SaaS',
    image: 'https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzY0OTM2MjgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    span: 'lg:col-span-1 lg:row-span-1'
  },
  {
    id: 4,
    title: 'NeonCommerce',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1708518804744-51c3ff8e5c83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwdGVjaCUyMGRhcmt8ZW58MXx8fHwxNzY0OTkwODc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    span: 'lg:col-span-2 lg:row-span-1'
  }
];

export function ProjectGallery() {
  return (
    <section className="px-6 py-24 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl mb-4">
          Featured <span className="text-[#00FF94]">Projects</span>
        </h2>
        <p className="text-xl text-gray-400">Transforming ideas into digital reality</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[300px]">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`group relative overflow-hidden rounded-2xl border border-gray-800 hover:border-[#00FF94] transition-all duration-300 ${project.span}`}
          >
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <div className="mb-2">
                <span className="text-xs text-[#00FF94] border border-[#00FF94]/30 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              <h3 className="text-2xl mb-3">{project.title}</h3>
              <button className="flex items-center gap-2 text-[#00FF94] opacity-0 group-hover:opacity-100 transition-opacity">
                View Case Study
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#00FF94]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
