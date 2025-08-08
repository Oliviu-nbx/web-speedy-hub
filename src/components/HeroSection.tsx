import { Button } from "@/components/ui/button";
import { ArrowDown, Server, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-servers.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-float">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Găzduire Web Site <br />
            <span className="gradient-text">Performantă</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Găzduire web site performantă pentru site-uri mici, medii și mari, cu suport tehnic 24/7
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            <Zap className="mr-2" />
            Începe Acum
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
            Afla Mai Mult
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-white/80 animate-pulse-slow">
            <Server className="w-12 h-12 mx-auto mb-4 text-accent" />
            <h3 className="text-lg font-semibold mb-2">Servere Performante</h3>
            <p>Tehnologie SSD și NVMe pentru viteze maxime</p>
          </div>
          <div className="text-white/80 animate-pulse-slow" style={{ animationDelay: '1s' }}>
            <Shield className="w-12 h-12 mx-auto mb-4 text-accent" />
            <h3 className="text-lg font-semibold mb-2">Securitate Maximă</h3>
            <p>Protecție DDoS și certificat SSL inclus</p>
          </div>
          <div className="text-white/80 animate-pulse-slow" style={{ animationDelay: '2s' }}>
            <Zap className="w-12 h-12 mx-auto mb-4 text-accent" />
            <h3 className="text-lg font-semibold mb-2">Suport 24/7</h3>
            <p>Echipă tehnică disponibilă non-stop</p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-white/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;