import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModCardProps {
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
  color?: string;
  delay?: number;
}

export default function ModCard({ title, category, image, description, link, color = "neon-green", delay = 0 }: ModCardProps) {
  const borderColorClass = {
    "neon-green": "border-neon-green hover:shadow-neon-green/50",
    "neon-pink": "border-neon-pink hover:shadow-neon-pink/50",
    "neon-blue": "border-neon-blue hover:shadow-neon-blue/50",
    "neon-purple": "border-neon-purple hover:shadow-neon-purple/50",
  }[color] || "border-dark-grey";

  const badgeColorClass = {
    "neon-green": "bg-neon-green",
    "neon-pink": "bg-neon-pink",
    "neon-blue": "bg-neon-blue",
    "neon-purple": "bg-neon-purple",
  }[color] || "bg-dark-grey";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={cn(
        "group relative bg-white rounded-3xl overflow-hidden border-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl",
        borderColorClass
      )}
    >
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <div className={cn("absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-white font-display text-sm border border-black shadow-sm", badgeColorClass)}>
          {category}
        </div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            // Fallback for broken GameBanana images if they block hotlinking
            e.currentTarget.src = `https://placehold.co/600x400/222/FFF?text=${encodeURIComponent(title)}`;
          }}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
      </div>

      <div className="p-5">
        <h3 className="font-heading text-2xl font-bold mb-2 group-hover:text-neon-purple transition-colors">{title}</h3>
        <p className="font-body text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-bold font-heading text-dark-grey hover:underline decoration-2 underline-offset-4"
        >
          Check it out <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}
