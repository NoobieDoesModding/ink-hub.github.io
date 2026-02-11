import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-grey text-white py-12 mt-20 relative overflow-hidden">
      {/* CSS Pattern Fallback */}
      <div className="absolute inset-0 bg-halftone opacity-5 invert mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="font-display text-3xl md:text-4xl mb-6 transform -rotate-1">
          <span className="text-neon-green">SILLY</span> <span className="text-neon-pink">NOOBIE</span>
        </div>
        
        <div className="flex justify-center gap-6 mb-8 font-heading">
          <a href="#" className="hover:text-neon-green transition-colors">Twitter</a>
          <a href="#" className="hover:text-neon-pink transition-colors">GameBanana</a>
          <a href="#" className="hover:text-neon-blue transition-colors">GitHub</a>
        </div>

        <div className="flex items-center justify-center gap-2 font-body text-gray-400">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-neon-pink fill-neon-pink animate-pulse" />
          <span>by Silly Noobie!</span>
        </div>
      </div>
    </footer>
  );
}
