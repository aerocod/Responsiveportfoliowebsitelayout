import { MessageCircle, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section className="px-6 py-32 max-w-4xl mx-auto">
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00FF94]/20 to-[#4D4DFF]/20 rounded-3xl blur-3xl"></div>
        
        <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-3xl p-12 text-center">
          <h2 className="text-4xl md:text-6xl mb-6">
            Ready to upgrade your
            <br />
            <span className="text-[#00FF94]">online presence?</span>
          </h2>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Let&apos;s collaborate to bring your vision to life with cutting-edge web solutions.
          </p>

          {/* Primary CTA - WhatsApp */}
          <a
            href="https://wa.me/6287709289728"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-[#00FF94] text-black px-12 py-6 rounded-xl text-xl hover:bg-[#00FF94]/90 transition-all hover:scale-105 mb-8 w-full sm:w-auto"
          >
            <MessageCircle className="w-6 h-6" />
            Chat on WhatsApp
          </a>

          {/* Secondary - Email */}
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <Mail className="w-4 h-4" />
            <a href="mailto:hello@neilwebsites.com" className="hover:text-[#00FF94] transition-colors">
              hello@neilwebsites.com
            </a>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-[#4D4DFF] rounded-lg rotate-12 opacity-50"></div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 border-2 border-[#00FF94] rounded-lg -rotate-12 opacity-50"></div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 text-center text-gray-500">
        <p>&copy; 2025 Neil Websites. Crafted with precision.</p>
      </div>
    </section>
  );
}
