import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Users, Server, Crown } from "lucide-react";
import sharedImage from "@/assets/shared-hosting-dark.jpg";
import vpsImage from "@/assets/vps-hosting-dark.jpg";
import dedicatedImage from "@/assets/dedicated-hosting-dark.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: Users,
      title: "Găzduire Shared",
      description: "Ideal pentru site-uri mici și medii. Performanță excelentă și costuri reduse pentru găzduirea website-urilor tale.",
      image: sharedImage
    },
    {
      icon: Server,
      title: "Găzduire VPS",
      description: "Pentru site-uri mai complexe. Performanță îmbunătățită și control complet asupra găzduirii VPS.",
      image: vpsImage,
      popular: true
    },
    {
      icon: Crown,
      title: "Găzduire Dedicată",
      description: "Pentru site-uri cu trafic mare. Resurse dedicate și maximă performanță pentru găzduire servere dedicate.",
      image: dedicatedImage
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Servicii de <span className="gradient-text">Găzduire Web Site</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-gradient relative overflow-hidden h-full hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <service.icon className="absolute bottom-6 right-6 w-8 h-8 text-white drop-shadow-lg" />
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-2xl mb-4">{service.title}</CardTitle>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <Button 
                  variant="hero"
                  className="w-full"
                  size="lg"
                >
                  Vezi Detalii
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;