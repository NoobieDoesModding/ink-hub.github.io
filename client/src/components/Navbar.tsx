import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import squidIcon from "@/assets/squid-icon.png";

export default function Navbar() {
  const [location] = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Mods", href: "/mods" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="bg-white/90 backdrop-blur-sm border-2 border-black/10 px-6 py-3 rounded-full shadow-lg flex items-center gap-8 max-w-4xl w-full justify-between transform transition-all hover:scale-[1.01]">
        
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group">
            <img 
              src={squidIcon} 
              alt="Logo" 
              className="w-10 h-10 transform transition-transform group-hover:rotate-12"
            />
            <span className="font-display text-2xl tracking-wide text-dark-grey group-hover:text-neon-pink transition-colors">
              SILLY NOOBIE
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-2 md:gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={cn(
                "font-heading font-bold text-lg px-4 py-1 rounded-full transition-all duration-300 hover:-translate-y-1 border-2 border-transparent cursor-pointer no-underline block",
                location === item.href 
                  ? "bg-neon-green text-dark-grey border-dark-grey rotate-[-2deg]" 
                  : "text-gray-600 hover:bg-neon-pink hover:text-white hover:rotate-2 hover:border-black"
              )}>
                {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
