import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Suport în Alegerea Pachetului Ideal
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dacă nu ești sigur ce tip de găzduire ți se potrivește, echipa noastră este aici să te ajute! Contactează-ne pentru recomandări personalizate și sfaturi privind cel mai bun pachet pentru site-ul tău.
          </p>
        </div>

        <div className="text-center">
          <Card className="bg-card border border-border text-foreground max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Contactează-ne pentru recomandări personalizate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-center">
                  <Phone className="w-8 h-8 mr-4 text-primary" />
                  <div className="text-center">
                    <p className="text-2xl font-bold">+40 264 33 44 55</p>
                    <p className="text-muted-foreground">Suport tehnic: 09:00–18:00 (L–V)</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <Mail className="w-8 h-8 mr-4 text-primary" />
                  <div className="text-center">
                    <a href="mailto:office@namebox.ro" rel="nofollow" className="font-bold underline hover:opacity-90">office@namebox.ro</a>
                    <p className="text-muted-foreground">Răspuns rapid</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button asChild variant="hero" size="lg" className="text-lg px-8 py-4">
                  <a href="tel:+40264334455" rel="nofollow" aria-label="Sună Namebox acum">
                    <Phone className="mr-2" />
                    Sună acum
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;