import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 hero-section text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Suport în Alegerea Pachetului Ideal
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Dacă nu ești sigur ce tip de găzduire ți se potrivește, echipa noastră este aici să te ajute!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center">
              <Phone className="w-12 h-12 mx-auto mb-4 text-accent" />
              <CardTitle>Telefon</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-2xl font-bold">0264 33 44 55</p>
              <p className="text-white/80">Apelează acum</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center">
              <Mail className="w-12 h-12 mx-auto mb-4 text-accent" />
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="font-bold">info@hosting.ro</p>
              <p className="text-white/80">Scrie-ne un mesaj</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center">
              <MessageCircle className="w-12 h-12 mx-auto mb-4 text-accent" />
              <CardTitle>Chat Live</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="font-bold">Chat Instant</p>
              <p className="text-white/80">Răspuns imediat</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-accent" />
              <CardTitle>Disponibilitate</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="font-bold">24/7</p>
              <p className="text-white/80">Non-stop</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Contactează-ne pentru recomandări personalizate</CardTitle>
              <CardDescription className="text-white/80 text-lg">
                Echipa noastră de experți îți va recomanda cea mai bună soluție pentru proiectul tău
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                  <Phone className="mr-2" />
                  Sună Acum
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                  <Mail className="mr-2" />
                  Trimite Email
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