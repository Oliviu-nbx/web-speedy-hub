import { Button } from "@/components/ui/button";
import { Menu, X, Server } from "lucide-react";
import { useState } from "react";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navItems = [{
    label: "Acasă",
    href: "#home"
  }, {
    label: "Servicii",
    href: "#services"
  }, {
    label: "Despre",
    href: "#about"
  }, {
    label: "Contact",
    href: "#contact"
  }];
  return <nav className="fixed top-0 w-full bg-white border-b border-border z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Server className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-foreground font-display">Gazduire Web</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <a key={item.label} href={item.href} className="story-link text-foreground/80 hover:text-primary transition-colors duration-200 font-medium">
                {item.label}
              </a>)}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button asChild variant="hero" size="sm">
              <a href="https://www.namebox.ro/#alege-pachet" target="_blank" rel="noopener noreferrer" aria-label="Comandă găzduire web Namebox">Începe Acum</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-foreground hover:bg-muted">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map(item => <a key={item.label} href={item.href} className="story-link text-foreground/80 hover:text-primary transition-colors duration-200 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </a>)}
              <Button asChild variant="hero" size="sm" className="mt-4 self-start">
                <a href="https://www.namebox.ro/#alege-pachet" target="_blank" rel="noopener noreferrer" aria-label="Comandă găzduire web Namebox">Începe Acum</a>
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;