import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ModCard from "@/components/ModCard";
import Footer from "@/components/Footer";
import { MODS, BLOGS } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Home() {
  const [selectedBlog, setSelectedBlog] = useState<typeof BLOGS[0] | null>(null);

  return (
    <div className="min-h-screen bg-splat-pattern font-body selection:bg-neon-pink selection:text-white">
      <Navbar />
      
      <main>
        <Hero />

        {/* Featured Mods Section */}
        <section id="mods" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <span className="font-display text-xl text-neon-purple tracking-wider uppercase mb-2 block">My Creations</span>
              <h2 className="font-display text-5xl md:text-6xl text-dark-grey drop-shadow-sm">
                LATEST <span className="text-neon-green relative inline-block transform -rotate-2 bg-dark-grey text-neon-green px-2 rounded-lg">DROPS</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {MODS.map((mod, index) => (
                <ModCard key={mod.id} {...mod} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-20 px-4 bg-white/50 backdrop-blur-sm border-y-4 border-dark-grey border-dashed">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-display text-5xl md:text-6xl text-dark-grey mb-12 text-center">
              FRESH <span className="text-neon-pink">NEWS</span>
            </h2>

            <div className="space-y-6">
              {BLOGS.map((blog, index) => (
                <motion.div 
                  key={blog.id}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedBlog(blog)}
                  className="bg-white p-6 rounded-2xl border-2 border-dark-grey shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-[-2px] transition-transform cursor-pointer group"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <h3 className="font-heading text-2xl font-bold group-hover:text-neon-pink transition-colors">{blog.title}</h3>
                    <span className="font-mono text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full self-start">{blog.date}</span>
                  </div>
                  <p className="text-gray-600">{blog.preview}</p>
                  <div className="mt-4 text-neon-purple font-bold font-heading group-hover:underline">Read more →</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-dark-grey text-white p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="font-display text-4xl mb-6 text-neon-green">ABOUT SILLY NOOBIE</h2>
                <p className="font-body text-xl leading-relaxed max-w-2xl mx-auto text-gray-300">
                  Just a silly modder making cool stuff for my favorite games. 
                  I love experimenting with textures, models, and making things look fresh!
                  Thanks for checking out my work.
                </p>
              </div>
              
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-neon-pink rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-neon-blue rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </section>

        {/* Blog Modal */}
        <AnimatePresence>
          {selectedBlog && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
              onClick={() => setSelectedBlog(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white rounded-[2rem] border-4 border-dark-grey max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedBlog(null)}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <span className="font-mono text-neon-pink mb-2 block">{selectedBlog.date}</span>
                <h2 className="font-display text-4xl mb-6 text-dark-grey">{selectedBlog.title}</h2>
                <div className="font-body text-lg leading-relaxed text-gray-700 space-y-4">
                  <p>{selectedBlog.preview}</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Stay tuned for more updates as I continue to develop my latest projects. 
                    Don't forget to check out the mods section for the latest downloads!
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t-2 border-dashed border-gray-200">
                  <button 
                    onClick={() => setSelectedBlog(null)}
                    className="font-display text-xl bg-neon-green text-dark-grey px-6 py-2 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all"
                  >
                    CLOSE
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>
      
      <Footer />
    </div>
  );
}
