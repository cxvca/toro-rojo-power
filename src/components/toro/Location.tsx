import { useEffect, useState } from "react";
import { Mail, MapPin, MessageCircle, Train, Bus } from "lucide-react";

// Horario: L-V 10-21, S 11-21, D cerrado
const isOpenNow = (d = new Date()) => {
  const day = d.getDay(); // 0=Sun
  const h = d.getHours() + d.getMinutes() / 60;
  if (day === 0) return false;
  if (day === 6) return h >= 11 && h < 21;
  return h >= 10 && h < 21;
};

const Location = () => {
  const [open, setOpen] = useState(isOpenNow());
  useEffect(() => {
    const t = setInterval(() => setOpen(isOpenNow()), 60_000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="contacto" className="bg-background py-24 md:py-32">
      <div className="container">
        <div className="text-center mb-14">
          <p className="font-condensed uppercase tracking-[0.4em] text-gold text-sm mb-3">— Visítanos —</p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground tracking-wider">CÓMO LLEGAR</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-card border-l-4 border-primary p-8 md:p-10 space-y-5">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <p className="font-condensed font-bold uppercase tracking-widest text-gold text-xs">Dirección</p>
                <p className="font-body text-foreground text-lg">C. Alcalá, 176, Salamanca, 28028 Madrid</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Train className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <p className="font-condensed font-bold uppercase tracking-widest text-gold text-xs">Metro</p>
                <p className="font-body text-foreground/90">L2 – Ventas · L5 – Quintana</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Bus className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <p className="font-condensed font-bold uppercase tracking-widest text-gold text-xs">Bus EMT</p>
                <p className="font-body text-foreground/90">Líneas que recorren Calle Alcalá</p>
              </div>
            </div>

            <a
              href="https://wa.me/34658041525"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 hover:text-primary transition-colors"
            >
              <MessageCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <p className="font-condensed font-bold uppercase tracking-widest text-gold text-xs">WhatsApp</p>
                <p className="font-body text-foreground text-lg">+34 658 041 525</p>
              </div>
            </a>

            <a
              href="mailto:empleotororojo@gmail.com"
              className="flex items-start gap-4 hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <p className="font-condensed font-bold uppercase tracking-widest text-gold text-xs">Empleo</p>
                <p className="font-body text-foreground/90 break-all">empleotororojo@gmail.com</p>
              </div>
            </a>

            <div className="border-t border-border pt-5 mt-5">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`dot-pulse w-3 h-3 rounded-full ${
                    open ? "bg-green-500" : "bg-primary"
                  }`}
                />
                <p className="font-condensed font-bold uppercase tracking-widest text-sm">
                  {open ? <span className="text-green-500">Abierto ahora</span> : <span className="text-primary">Cerrado ahora</span>}
                </p>
              </div>
              <ul className="font-body text-sm text-foreground/85 space-y-1">
                <li className="flex justify-between"><span>Lunes a Viernes</span><span className="text-gold">10:00 – 21:00</span></li>
                <li className="flex justify-between"><span>Sábado</span><span className="text-gold">11:00 – 21:00</span></li>
                <li className="flex justify-between"><span>Domingo</span><span className="text-muted-foreground">Cerrado</span></li>
              </ul>
              <p className="text-xs text-muted-foreground mt-3">Confirma disponibilidad por WhatsApp.</p>
            </div>
          </div>

          <div className="relative min-h-[400px] lg:min-h-full border-2 border-blood overflow-hidden">
            <iframe
              title="Mapa Toro Rojo Barbershop"
              src="https://www.google.com/maps?q=Calle+Alcal%C3%A1+176%2C+28028+Madrid&output=embed"
              loading="lazy"
              className="absolute inset-0 w-full h-full grayscale contrast-125"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
