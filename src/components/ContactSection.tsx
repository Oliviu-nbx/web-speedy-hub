import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 hero-section text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Suport în Alegerea Pachetului Ideal
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Dacă nu ești sigur ce tip de găzduire ți se potrivește, echipa noastră este aici să te ajute! Contactează-ne pentru recomandări personalizate și sfaturi privind cel mai bun pachet pentru site-ul tău.
          </p>
        </div>

        <div className="text-center">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Contactează-ne pentru recomandări personalizate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-center">
                  <Phone className="w-8 h-8 mr-4 text-accent" />
                  <div className="text-center">
                    <p className="text-2xl font-bold">0264 33 44 55</p>
                    <p className="text-white/80">Suntem disponibili prin telefon</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <Mail className="w-8 h-8 mr-4 text-accent" />
                  <div className="text-center">
                    <p className="font-bold">sau prin email</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                  <Phone className="mr-2" />
                  Sună acum
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