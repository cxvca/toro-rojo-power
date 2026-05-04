import { Facebook, Instagram, MessageCircle } from "lucide-react";
import toroLogo from "@/assets/toro-logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t-2 border-blood pt-14 pb-8">
      <div className="container text-center">
        <p className="font-display text-3xl md:text-4xl tracking-[0.25em] text-gold mt-5">
          LUCE EL ÉXITO, SIENTE EL PODER
        </p>

        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-8 font-condensed uppercase tracking-widest text-sm">
          <a href="#servicios" className="text-foreground/80 hover:text-primary transition-colors">Servicios</a>
          <span className="text-gold">✦</span>
          <a href="#resenas" className="text-foreground/80 hover:text-primary transition-colors">Reseñas</a>
          <span className="text-gold">✦</span>
          <a href="#galeria" className="text-foreground/80 hover:text-primary transition-colors">Galería</a>
          <span className="text-gold">✦</span>
          <a href="#reservas" className="text-foreground/80 hover:text-primary transition-colors">Reservar</a>
          <span className="text-gold">✦</span>
          <a href="mailto:empleotororojo@gmail.com" className="text-foreground/80 hover:text-primary transition-colors">Empleo</a>
        </nav>

        <div className="flex items-center justify-center gap-5 mt-8">
          <a
            href="https://www.instagram.com/tororojobarberia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-11 h-11 rounded-full border border-border hover:border-primary hover:text-primary text-foreground/80 flex items-center justify-center transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61584056787841"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-11 h-11 rounded-full border border-border hover:border-primary hover:text-primary text-foreground/80 flex items-center justify-center transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://wa.me/34658041525"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-11 h-11 rounded-full border border-border hover:border-primary hover:text-primary text-foreground/80 flex items-center justify-center transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>

        <div className="mt-8 space-y-1 font-body text-sm text-foreground/70">
          <p>C. Alcalá, 176 · Salamanca · 28028 Madrid</p>
          <p>WhatsApp: <a href="https://wa.me/34658041525" className="text-foreground hover:text-primary">+34 658 041 525</a></p>
          <p>Empleo: <a href="mailto:empleotororojo@gmail.com" className="text-foreground hover:text-primary">empleotororojo@gmail.com</a></p>
        </div>

        <p className="mt-8 text-xs text-muted-foreground font-body">
          © 2026 Toro Rojo Barbershop · Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
