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
      title: "Viteza de Încărcare a Site-ului și Găzduirea Web",
      description: "Unul dintre cele mai importante aspecte ale găzduirii web este viteza de încărcare. Site-urile lente pot afecta negativ experiența utilizatorilor și pot duce la pierderea traficului. Găzduirea pe servere performante, cu stocare SSD sau NVMe, poate îmbunătăți semnificativ viteza de încărcare a site-ului."
    },
    {
      icon: Shield,
      title: "Securitatea Găzduirii Web",
      description: "Găzduirea web trebuie să fie sigură pentru a proteja site-ul tău de atacuri cibernetice și de pierderi de date. Majoritatea furnizorilor de găzduire oferă măsuri de securitate, cum ar fi protecția împotriva DDoS, firewall-uri și criptarea datelor. De asemenea, certificatele SSL sunt esențiale pentru o conexiune sigură."
    },
    {
      icon: Headphones,
      title: "Suport Tehnic pentru Găzduire Web",
      description: "Un serviciu de găzduire web de calitate trebuie să includă suport tehnic disponibil 24/7. Acesta este crucial pentru a rezolva rapid orice problemă apărută pe site-ul tău. Un suport tehnic prompt și competent poate preveni întreruperile de serviciu și pierderile de trafic."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Despre <span className="gradient-text">Găzduirea Web Site</span>
          </h2>
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

        {/* Tipuri de Găzduire Web */}
        <div className="mt-16">
          <Card className="card-gradient">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl gradient-text mb-4">Tipuri de Găzduire Web</CardTitle>
            </CardHeader>
            <CardContent className="max-w-4xl mx-auto">
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                Există mai multe tipuri de găzduire web, inclusiv găzduirea shared, VPS (servere private virtuale) și găzduirea dedicată. Fiecare tip are propriile avantaje și dezavantaje, iar alegerea acestuia depinde de nevoile specifice ale site-ului tău. Găzduirea shared este ideală pentru site-uri mici și medii, în timp ce VPS și găzduirea dedicată sunt recomandate pentru site-uri cu trafic mare sau care necesită resurse suplimentare.
              </p>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;