import { Figma, Code, Palette, Layout, Layers } from 'lucide-react';

const skills = [
  { name: 'Figma', icon: Figma },
  { name: 'Webflow', icon: Layers },
  { name: 'React', icon: Code },
  { name: 'HTML/CSS', icon: Layout },
  { name: 'UI Design', icon: Palette },
  { name: 'Figma', icon: Figma },
  { name: 'Webflow', icon: Layers },
  { name: 'React', icon: Code },
];

export function Skills() {
  return (
    <section className="py-24 overflow-hidden border-y border-gray-800/50">
      <div className="mb-12 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl">
          Tech <span className="text-[#00FF94]">Stack</span>
        </h2>
      </div>

      {/* Scrolling ticker */}
      <div className="relative">
        <div className="flex gap-8 animate-scroll">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 px-8 py-6 border border-gray-800 rounded-xl bg-gray-900/50 backdrop-blur-sm hover:border-[#00FF94] transition-colors shrink-0"
              >
                <Icon className="w-8 h-8 text-[#00FF94]" />
                <span className="text-xl whitespace-nowrap">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
          width: fit-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
