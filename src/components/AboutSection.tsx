import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Zap, Shield, Headphones, History, TrendingUp } from "lucide-react";
import securityImage from "@/assets/security.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: Globe,
      title: "Ce Este Găzduirea Web?",
      description: "Găzduirea web este procesul prin care un website este stocat pe un server, astfel încât să poată fi accesat de către utilizatori prin internet. Alegerea unui serviciu de găzduire web optimizat pentru performanță și SEO este esențială pentru succesul site-ului tău."
    },
    {
      icon: Zap,
      title: "Viteza de Încărcare",
      description: "Unul dintre cele mai importante aspecte ale găzduirii web este viteza de încărcare. Site-urile lente pot afecta negativ experiența utilizatorilor și pot duce la pierderea traficului. Găzduirea pe servere performante, cu stocare SSD sau NVMe, poate îmbunătăți semnificativ viteza."
    },
    {
      icon: Shield,
      title: "Securitatea Găzduirii Web",
      description: "Găzduirea web trebuie să fie sigură pentru a proteja site-ul tău de atacuri cibernetice. Majoritatea furnizorilor oferă măsuri de securitate, cum ar fi protecția împotriva DDoS, firewall-uri și criptarea datelor. Certificatele SSL sunt esențiale pentru securitate."
    },
    {
      icon: Headphones,
      title: "Suport Tehnic 24/7",
      description: "Un serviciu de găzduire web de calitate trebuie să includă suport tehnic disponibil 24/7. Acesta este crucial pentru a rezolva rapid orice problemă apărută pe site-ul tău. Un suport tehnic prompt poate preveni întreruperile de serviciu și pierderile de trafic."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Despre <span className="gradient-text">Găzduirea Web Site</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Totul despre găzduirea web - de la concepte de bază la caracteristici avansate
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
              <h3 className="text-3xl font-bold mb-4 gradient-text">Tipuri de Găzduire Web</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Există mai multe tipuri de găzduire web, inclusiv găzduirea shared, VPS (servere private virtuale) și găzduirea dedicată. Fiecare tip are propriile avantaje și dezavantaje, iar alegerea acestuia depinde de nevoile specifice ale site-ului tău.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <TrendingUp className="w-6 h-6 text-secondary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Găzduirea Shared</h4>
                  <p className="text-muted-foreground">Ideală pentru site-uri mici și medii cu costuri reduse</p>
                </div>
              </div>
              <div className="flex items-start">
                <TrendingUp className="w-6 h-6 text-secondary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">VPS Hosting</h4>
                  <p className="text-muted-foreground">Pentru site-uri cu cerințe mai mari de performanță</p>
                </div>
              </div>
              <div className="flex items-start">
                <TrendingUp className="w-6 h-6 text-secondary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Găzduirea Dedicată</h4>
                  <p className="text-muted-foreground">Pentru aplicații complexe cu trafic mare</p>
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
              <CardTitle className="text-3xl gradient-text">Istoria Găzduirii Web</CardTitle>
              <CardDescription className="text-lg">
                De la primul server web din 1990 la soluțiile moderne de cloud computing
              </CardDescription>
            </CardHeader>
            <CardContent className="max-w-4xl mx-auto">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Găzduirea web a evoluat semnificativ de-a lungul decadelor, iar astăzi reprezintă fundamentul majorității afacerilor și site-urilor personale. Prima soluție de găzduire web a fost introdusă în anii 1990, când au apărut primele servere dedicate care stocau și gestionau datele pentru site-uri statice.
                </p>
                <p>
                  Primul server web a fost creat de Tim Berners-Lee în 1990, în cadrul cercetărilor sale pentru dezvoltarea World Wide Web. A fost găzduit pe un computer din cadrul CERN din Elveția. Acest server a marcat începutul unei revoluții, iar în doar câțiva ani, au apărut primele companii care ofereau soluții de găzduire web.
                </p>
                <p>
                  Astăzi, soluțiile de găzduire sunt mult mai diversificate, incluzând găzduirea shared, VPS, servere dedicate și soluții de cloud computing care sunt scalabile, accesibile și personalizabile. Inovațiile tehnologice, cum ar fi SSD și NVMe pentru stocare rapidă, și avansurile în securitate au îmbunătățit semnificativ serviciile de găzduire web.
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