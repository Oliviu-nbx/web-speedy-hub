import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Zap, Shield, Headphones, History, TrendingUp } from "lucide-react";
import securityImage from "@/assets/security.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: Globe,
      title: "Ce Înseamnă Gazduire Web?",
      description: "Gazduirea web este serviciul care permite ca site-ul tău să fie accesibil pe internet 24/7. Alegerea unei companii de gazduire web profesională este crucială pentru succesul online al afacerii tale în România."
    },
    {
      icon: Zap,
      title: "Viteza Hosting România",
      description: "Viteza de încărcare este factorul cel mai important pentru succesul site-ului tău. Serviciile noastre de gazduire web folosesc tehnologie SSD și servere optimizate pentru performance maxim în România și Europa."
    },
    {
      icon: Shield,
      title: "Securitate Gazduire Web",
      description: "Gazduirea web sigură protejează site-ul tău de atacuri cibernetice și malware. Oferim protecție completă DDoS, firewall avansat, certificate SSL gratuite și backup-uri automatizate pentru siguranța maximă."
    },
    {
      icon: Headphones,
      title: "Support Gazduire Web 24/7",
      description: "Echipa noastră de specialiști în gazduire web este disponibilă 24/7 pentru a rezolva orice problemă tehnică. Support rapid și profesionist pentru toate serviciile de hosting din România."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tot Despre <span className="gradient-text">Gazduire Web România</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ghidul complet pentru serviciile de gazduire web și hosting profesional în România
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="card-gradient h-full">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 mr-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Security Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={securityImage} 
              alt="Securitatea web hosting"
              className="rounded-2xl shadow-2xl w-full h-auto animate-float"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-4 gradient-text">Tipuri de Gazduire Web</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Există mai multe tipuri de gazduire web: hosting shared, VPS și servere dedicate. Fiecare soluție de gazduire web are avantajele sale specifice, iar alegerea depinde de mărimea și complexitatea site-ului tău.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <TrendingUp className="w-6 h-6 text-secondary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Hosting Shared România</h4>
                  <p className="text-muted-foreground">Gazduire web accesibilă pentru site-uri mici și medii</p>
                </div>
              </div>
              <div className="flex items-start">
                <TrendingUp className="w-6 h-6 text-secondary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">VPS Hosting România</h4>
                  <p className="text-muted-foreground">Gazduire web VPS pentru proiecte complexe și trafic mediu</p>
                </div>
              </div>
              <div className="flex items-start">
                <TrendingUp className="w-6 h-6 text-secondary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Server Dedicat România</h4>
                  <p className="text-muted-foreground">Gazduire web dedicată pentru aplicații mari cu trafic intens</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* History Section */}
        <div className="mt-20">
          <Card className="card-gradient">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <History className="w-12 h-12 text-primary" />
              </div>
              <CardTitle className="text-3xl gradient-text">Istoria Gazduire Web</CardTitle>
              <CardDescription className="text-lg">
                Evoluția serviciilor de gazduire web de la primul server din 1990 până la hosting-ul modern din România
              </CardDescription>
            </CardHeader>
            <CardContent className="max-w-4xl mx-auto">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Gazduirea web în România a evoluat spectaculos din 1990 până astăzi. Prima soluție de gazduire web a fost introdusă odată cu primul server web creat de Tim Berners-Lee la CERN. Astăzi, România are o infrastructură de gazduire web modernă și competitivă.
                </p>
                <p>
                  Primul server web din lume a fost găzduit pe un computer NeXT la CERN în Elveția în 1990. Această inovație a pus bazele industriei moderne de gazduire web. În România, primele servicii de hosting au apărut în anii 1990, evoluând rapid către soluții profesionale.
                </p>
                <p>
                  Astăzi, piața românească de gazduire web oferă soluții complete: hosting shared accesibil, VPS scalabil și servere dedicate pentru proiecte mari. Tehnologiile moderne como SSD, NVMe și protecția DDoS sunt standard în gazduirea web profesională din România.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;