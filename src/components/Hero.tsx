import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Decorative grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#00FF94 1px, transparent 1px), linear-gradient(90deg, #00FF94 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Accent glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00FF94] rounded-full blur-[150px] opacity-20"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#4D4DFF] rounded-full blur-[150px] opacity-20"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-8">
          <div className="inline-block px-4 py-2 border border-[#00FF94]/30 rounded-full">
            <span className="text-[#00FF94] text-sm tracking-wider">NEIL WEBSITES</span>
          </div>

          <h1 className="text-5xl md:text-7xl tracking-tight">
            Building Digital
            <br />
            <span className="text-[#00FF94]">Experiences</span>
            <br />
            that Sell.
          </h1>

          <p className="text-xl text-gray-400 max-w-xl">
            Professional Web Design & Development Services tailored for your business growth.
          </p>

          <button className="group bg-[#00FF94] text-black px-8 py-4 rounded-lg flex items-center gap-3 hover:bg-[#00FF94]/90 transition-all hover:gap-5">
            Start a Project
            <ArrowRight className="w-5 h-5 transition-all" />
          </button>
        </div>

        {/* Visual Right - Abstract geometric shapes */}
        <div className="relative hidden lg:block">
          <div className="relative w-full h-[500px]">
            {/* Floating geometric elements */}
            <div className="absolute top-0 right-0 w-64 h-64 border-2 border-[#00FF94] rounded-lg rotate-12 animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 border-2 border-[#4D4DFF] rounded-lg -rotate-6"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-[#00FF94]/20 to-[#4D4DFF]/20 rounded-lg backdrop-blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
