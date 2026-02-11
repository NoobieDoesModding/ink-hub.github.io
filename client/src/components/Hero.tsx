import { motion } from "framer-motion";
import splatGreen from "@/assets/splat-green.png";
import splatPink from "@/assets/splat-pink.png";

export default function Hero() {
  return (
    <div className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-halftone z-0 pointer-events-none" />
      
      {/* Animated Ink Splatters */}
      <motion.img 
        src={splatGreen}
        className="absolute top-[10%] left-[10%] w-64 md:w-96 opacity-80 z-0"
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.img 
        src={splatPink}
        className="absolute bottom-[15%] right-[5%] w-72 md:w-[30rem] opacity-80 z-0"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
        >
          <h1 className="font-display text-7xl md:text-9xl text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] text-stroke md:text-stroke mb-4 leading-none transform -rotate-2">
            STAY <span className="text-neon-green">FRESH</span>, <br />
            MOD <span className="text-neon-pink">BETTER</span>!
          </h1>
        </motion.div>

        <motion.p 
          className="font-heading text-xl md:text-2xl text-dark-grey max-w-2xl mx-auto mb-8 bg-white/80 backdrop-blur-sm p-4 rounded-xl border-2 border-dark-grey shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Welcome to Silly Noobie's modding playground. 
          Check out my latest creations and tools!
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a href="#mods" className="font-display text-2xl bg-neon-purple text-white px-8 py-3 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all hover:bg-neon-purple/90">
            VIEW MODS
          </a>
          <a href="https://gamebanana.com" target="_blank" className="font-display text-2xl bg-white text-dark-grey px-8 py-3 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all hover:bg-gray-50">
            GAMEBANANA
          </a>
        </motion.div>
      </div>
    </div>
  );
}
