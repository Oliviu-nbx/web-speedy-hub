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
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Găzduire Web Site <br />
            <span className="gradient-text">Performantă</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Găzduire web site performantă pentru site-uri mici, medii și mari, cu suport tehnic 24/7
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button variant="hero" size="lg" className="text-lg px-10 py-4">
            <Zap className="mr-2" />
            Începe Acum
          </Button>
          <Button variant="elegant" size="lg" className="text-lg px-10 py-4">
            Afla Mai Mult
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-white/70 p-6 rounded-xl bg-white/5 backdrop-blur-sm">
            <Server className="w-10 h-10 mx-auto mb-4 text-white" />
            <h3 className="text-lg font-semibold mb-3 text-white">Servere Performante</h3>
            <p className="leading-relaxed">Tehnologie SSD și NVMe pentru viteze maxime</p>
          </div>
          <div className="text-white/70 p-6 rounded-xl bg-white/5 backdrop-blur-sm">
            <Shield className="w-10 h-10 mx-auto mb-4 text-white" />
            <h3 className="text-lg font-semibold mb-3 text-white">Securitate Maximă</h3>
            <p className="leading-relaxed">Protecție DDoS și certificat SSL inclus</p>
          </div>
          <div className="text-white/70 p-6 rounded-xl bg-white/5 backdrop-blur-sm">
            <Zap className="w-10 h-10 mx-auto mb-4 text-white" />
            <h3 className="text-lg font-semibold mb-3 text-white">Suport 24/7</h3>
            <p className="leading-relaxed">Echipă tehnică disponibilă non-stop</p>
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