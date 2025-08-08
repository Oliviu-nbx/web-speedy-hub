import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-6">
        <h1 className="text-6xl font-bold mb-4 text-foreground">404</h1>
        <p className="text-lg text-muted-foreground mb-6">Pagina căutată nu există sau a fost mutată.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <a href="/" rel="nofollow" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition">Înapoi acasă</a>
          <a href="#services" rel="nofollow" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-border text-foreground hover:bg-muted transition">Vezi serviciile</a>
          <a href="#contact" rel="nofollow" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-border text-foreground hover:bg-muted transition">Contact</a>
        </div>
        <small className="text-muted-foreground">Dacă problema persistă, scrie-ne la <a href="mailto:office@namebox.ro" rel="nofollow" className="underline">office@namebox.ro</a>.</small>
      </div>
    </div>
  );
};

export default NotFound;
