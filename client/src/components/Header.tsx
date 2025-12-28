import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Corporate", href: "#services" },
    { name: "Events", href: "#services" },
    { name: "Roadshows", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10",
        scrolled ? "bg-primary/95 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="z-50">
          <img 
            src="https://www.tbrglobal.com/wp-content/themes/tbrmono/assets/brand/tbr-logo-web.svg" 
            alt="TBR Global" 
            className="h-8 md:h-10 w-auto invert brightness-0 filter" 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-white text-sm uppercase tracking-widest font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="h-4 w-px bg-white/30 mx-2" />
          <Button 
            variant="ghost" 
            className="text-white hover:text-white hover:bg-white/10 uppercase tracking-widest text-xs"
          >
            Log In
          </Button>
          <Button 
            className="bg-white text-primary hover:bg-white/90 uppercase tracking-widest text-xs font-semibold px-6"
          >
            Request Quote
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Nav Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-primary/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl text-white font-display font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-4 mt-8 w-64">
             <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary uppercase tracking-widest">
              Log In
            </Button>
            <Button className="w-full bg-white text-primary hover:bg-white/90 uppercase tracking-widest">
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
