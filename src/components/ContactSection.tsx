import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 hero-section text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Alege Gazduire Web Perfectă
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Contactează specialiștii noștri în gazduire web pentru consultanță gratuită și recomandări personalizate de hosting
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center">
              <Phone className="w-12 h-12 mx-auto mb-4 text-accent" />
              <CardTitle>Consultanță Gazduire</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-2xl font-bold">0264 33 44 55</p>
              <p className="text-white/80">Specialiști hosting</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center">
              <Mail className="w-12 h-12 mx-auto mb-4 text-accent" />
              <CardTitle>Email Gazduire Web</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="font-bold">hosting@webhost.ro</p>
              <p className="text-white/80">Info despre gazduire</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center">
              <MessageCircle className="w-12 h-12 mx-auto mb-4 text-accent" />
              <CardTitle>Chat Hosting Live</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="font-bold">Chat Gazduire Instant</p>
              <p className="text-white/80">Support hosting rapid</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-accent" />
              <CardTitle>Support Hosting 24/7</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="font-bold">24/7/365</p>
              <p className="text-white/80">Gazduire web non-stop</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Consultanță Gratuită Gazduire Web</CardTitle>
              <CardDescription className="text-white/80 text-lg">
                Specialiștii noștri în gazduire web îți vor recomanda soluția de hosting perfectă pentru proiectul tău
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                  <Phone className="mr-2" />
                  Consultanță Hosting
                </Button>
                <Button variant="elegant" size="lg" className="text-lg px-8 py-4">
                  <Mail className="mr-2" />
                  Email Gazduire Web
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