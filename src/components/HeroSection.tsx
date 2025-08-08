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
            <span className="gradient-text">Gazduire Web</span> <br />
            Profesională România
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Servicii complete de gazduire web pentru afacerea ta. Hosting rapid, securizat și cu suport tehnic 24/7 în România.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button variant="hero" size="lg" className="text-lg px-10 py-4">
            <Zap className="mr-2" />
            Alege Gazduire Web
          </Button>
          <Button variant="elegant" size="lg" className="text-lg px-10 py-4">
            Compară Planuri Hosting
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-white/70 p-6 rounded-xl bg-white/5 backdrop-blur-sm">
            <Server className="w-10 h-10 mx-auto mb-4 text-white" />
            <h3 className="text-lg font-semibold mb-3 text-white">Hosting SSD Rapid</h3>
            <p className="leading-relaxed">Gazduire web pe servere SSD ultra-rapide pentru performanță maximă</p>
          </div>
          <div className="text-white/70 p-6 rounded-xl bg-white/5 backdrop-blur-sm">
            <Shield className="w-10 h-10 mx-auto mb-4 text-white" />
            <h3 className="text-lg font-semibold mb-3 text-white">Gazduire Web Securizată</h3>
            <p className="leading-relaxed">Protecție completă DDoS și SSL gratuit pentru sigurința site-ului</p>
          </div>
          <div className="text-white/70 p-6 rounded-xl bg-white/5 backdrop-blur-sm">
            <Zap className="w-10 h-10 mx-auto mb-4 text-white" />
            <h3 className="text-lg font-semibold mb-3 text-white">Support Hosting 24/7</h3>
            <p className="leading-relaxed">Echipă de specialiști în gazduire web disponibilă permanent</p>
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