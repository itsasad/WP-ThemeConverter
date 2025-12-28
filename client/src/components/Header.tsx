import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled 
          ? "bg-background/90 backdrop-blur-md border-white/10 py-4" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-display font-bold text-white tracking-widest uppercase">
            Berry Executive
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm font-medium text-white/80 hover:text-primary transition-colors uppercase tracking-wider"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 ml-4">
              <Button variant="ghost" className="text-white hover:text-primary hover:bg-white/5">
                Login
              </Button>
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-none px-6"
              >
                Request Quote
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-white/10 p-6 animate-in slide-in-from-top-5">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block text-lg font-medium text-white/80 hover:text-primary"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <Button variant="ghost" className="w-full justify-start text-white">
                Login
              </Button>
              <Button className="w-full bg-primary text-primary-foreground">
                Request Quote
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
