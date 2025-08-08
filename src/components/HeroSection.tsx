import { Button } from "@/components/ui/button";
import { ArrowDown, Server, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-servers.jpg";
const HeroSection = () => {
  return <section className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0" style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      opacity: 0.25
    }} />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/60 to-background" />
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-8 leading-tight">
            Servicii de <span className="gradient-text">Găzduire Web</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">Găzduire web performantă pentru site-uri mici, medii și mari, cu suport tehnic 24/7</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button asChild variant="hero" size="lg" className="text-lg px-10 py-4">
            <a href="https://www.namebox.ro/#alege-pachet" target="_blank" rel="nofollow noopener noreferrer" aria-label="Vezi serviciile Namebox">
              <Zap className="mr-2" />
              Vezi Servicii
            </a>
          </Button>
        </div>

      </div>
    </section>;
};
export default HeroSection;