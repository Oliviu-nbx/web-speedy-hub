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
      price: "De la 15 RON/lună",
      image: sharedImage,
      popular: false
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
      price: "De la 99 RON/lună",
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
      price: "De la 299 RON/lună",
      image: dedicatedImage,
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Servicii de Găzduire Web Site
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Alegem soluția perfectă pentru nevoile tale, de la site-uri simple la aplicații complexe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`card-gradient relative overflow-hidden h-full ${
                service.popular ? 'ring-2 ring-primary glow-effect' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Populară
                </div>
              )}
              
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <service.icon className="absolute bottom-4 right-4 w-8 h-8 text-white" />
              </div>

              <CardHeader>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-lg">{service.subtitle}</CardDescription>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-8 flex-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="text-3xl font-bold text-primary mb-4">{service.price}</div>
                  <Button 
                    variant={service.popular ? "gradient" : "default"} 
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