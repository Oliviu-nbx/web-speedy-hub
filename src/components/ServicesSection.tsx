import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Users, Server, Crown } from "lucide-react";
import sharedImage from "@/assets/shared-hosting.jpg";
import vpsImage from "@/assets/vps-hosting.jpg";
import dedicatedImage from "@/assets/dedicated-hosting.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: Users,
      title: "Găzduire Shared",
      subtitle: "Ideal pentru site-uri mici și medii",
      description: "Performanță excelentă și costuri reduse pentru găzduirea website-urilor tale.",
      features: [
        "Spațiu de stocare 10GB - 100GB",
        "Trafic nelimitat",
        "Certificat SSL gratuit",
        "cPanel inclus",
        "Backup automat zilnic"
      ],
      image: sharedImage
    },
    {
      icon: Server,
      title: "Găzduire VPS",
      subtitle: "Pentru site-uri mai complexe",
      description: "Performanță îmbunătățită și control complet asupra găzduirii VPS.",
      features: [
        "Resurse garantate",
        "Root access complet",
        "Scalabilitate instant",
        "SSD NVMe rapid",
        "Monitorizare 24/7"
      ],
      image: vpsImage,
      popular: true
    },
    {
      icon: Crown,
      title: "Găzduire Dedicată",
      subtitle: "Pentru site-uri cu trafic mare",
      description: "Resurse dedicate și maximă performanță pentru găzduire servere dedicate.",
      features: [
        "Server dedicat 100%",
        "Configurare personalizată",
        "Performanță maximă",
        "Suport prioritar",
        "Management inclus"
      ],
      image: dedicatedImage
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            Servicii de Găzduire Web Site
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Alegem soluția perfectă pentru nevoile tale, de la site-uri simple la aplicații complexe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`card-gradient relative overflow-hidden h-full hover:scale-[1.02] transition-all duration-300 ${
                service.popular ? 'ring-2 ring-primary/30' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute top-6 right-6 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  Populară
                </div>
              )}
              
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <service.icon className="absolute bottom-6 right-6 w-8 h-8 text-white drop-shadow-lg" />
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-lg">{service.subtitle}</CardDescription>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col pt-0">
                <p className="text-muted-foreground mb-8 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-4 flex-shrink-0" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4">
                  <Button 
                    variant={service.popular ? "hero" : "cta"} 
                    className="w-full"
                    size="lg"
                  >
                    Alege Planul
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;