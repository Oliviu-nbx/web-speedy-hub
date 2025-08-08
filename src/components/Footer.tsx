import { Server, Phone, Mail, MapPin } from "lucide-react";
const Footer = () => {
  return <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <Server className="w-8 h-8 text-accent" />
              <span className="text-2xl font-bold">Gazduire Web</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Furnizor de încredere pentru servicii de găzduire web performante și sigure în România.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicii</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="https://www.namebox.ro/#alege-pachet" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Găzduire Shared</a></li>
              <li><a href="https://www.namebox.ro/servere-vps/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Găzduire VPS</a></li>
              <li><a href="https://www.namebox.ro/servere-kvm/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Găzduire Dedicată</a></li>
              <li><a href="https://www.namebox.ro/inregistrare-domenii/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Domenii Web</a></li>
              <li><a href="https://www.namebox.ro/certificate-ssl/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Certificat SSL</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Suport</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="https://www.namebox.ro/documentatie/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Documentație</a></li>
              <li><a href="https://www.namebox.ro/blog/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Tutoriale</a></li>
              <li><a href="https://www.namebox.ro/documentatie/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="https://my.namebox.ro/serverstatus.php" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Status Servere</a></li>
              <li><a href="https://my.namebox.ro/submitticket.php" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
                <span>+40 264 33 44 55</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
                <a href="mailto:office@namebox.ro" className="hover:text-accent transition-colors">office@namebox.ro</a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-accent flex-shrink-0 mt-1" />
                <span>Strada Heltai Gáspár 17, Cluj-Napoca</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>© 2024 Gazduire Web . Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;