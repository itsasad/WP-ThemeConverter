import { useState, useEffect } from "react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/95 backdrop-blur-md py-2 border-black/5 shadow-sm"
          : "bg-transparent py-4 border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="flex-shrink-0 z-50">
          <img 
            src="https://www.tbrglobal.com/wp-content/themes/tbrmono/assets/brand/tbr-logo-web.svg" 
            alt="TBR Global" 
            className="h-8 md:h-10"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Corporate", "Events", "Roadshows", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                "text-sm uppercase tracking-widest font-medium transition-colors hover:text-primary/70",
                isScrolled ? "text-primary" : "text-primary" 
              )}
            >
              {item}
            </a>
          ))}
          
          <div className="flex items-center gap-4 ml-4">
            <Button variant="ghost" className="uppercase tracking-widest text-xs font-semibold">
              Login
            </Button>
            <Button className="bg-primary text-white hover:bg-primary/90 uppercase tracking-widest text-xs font-semibold rounded-none px-6">
              Request Quote
            </Button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 p-2 text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 animate-in fade-in slide-in-from-top-10 duration-200">
            {["Corporate", "Events", "Roadshows", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-2xl font-display text-primary hover:text-primary/70"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
             <Button className="w-48 bg-primary text-white uppercase tracking-widest text-xs font-semibold rounded-none mt-4">
              Request Quote
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
