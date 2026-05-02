import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/34658041525?text=Hola!%20Me%20gustar%C3%ADa%20reservar%20una%20cita%20en%20Toro%20Rojo%20Barbershop.";

const Booking = () => {
  return (
    <section id="reservas" className="relative leather-texture py-24 md:py-32">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-6xl md:text-8xl text-foreground tracking-wider">RESERVA TU CITA</h2>
          <p className="font-display text-xl md:text-3xl text-gold tracking-[0.18em] mt-3">
            Solo por WhatsApp — rápido, directo y sin complicaciones
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {/* WhatsApp Card */}
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 group relative bg-card border-l-4 border-primary p-8 md:p-10 rounded-sm hover:bg-background transition-all duration-300 pulse-glow block"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="dot-pulse w-2.5 h-2.5 rounded-full bg-green-500" />
              <span className="font-condensed text-xs uppercase tracking-[0.3em] text-green-500">Respuesta rápida</span>
            </div>

            <div className="flex items-start gap-5 mt-4">
              <div className="shrink-0 w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-green-500" />
              </div>
              <div className="flex-1">
                <p className="font-condensed font-bold uppercase tracking-widest text-gold text-sm">Escríbenos por WhatsApp</p>
                <p className="font-display text-3xl md:text-4xl text-foreground mt-1 tracking-wide">+34 658 041 525</p>
                <p className="font-body text-sm text-muted-foreground mt-2">
                  Cuéntanos qué servicio quieres y te confirmamos hueco al instante.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <span className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-background font-condensed font-bold uppercase tracking-widest px-6 py-3 rounded-full transition-colors">
                <MessageCircle className="w-4 h-4" />
                Abrir WhatsApp
              </span>
            </div>
          </motion.a>

          {/* Empleo Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 bg-card border-l-4 border-gold p-8 md:p-10 rounded-sm flex flex-col"
          >
            <div className="shrink-0 w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center mb-4">
              <Mail className="w-7 h-7 text-gold" />
            </div>
            <p className="font-condensed font-bold uppercase tracking-widest text-gold text-sm">Trabaja con nosotros</p>
            <p className="font-display text-2xl text-foreground mt-2 leading-tight">
              ¿Eres barbero y quieres unirte al equipo?
            </p>
            <p className="font-body text-sm text-muted-foreground mt-3 break-all">empleotororojo@gmail.com</p>
            <a
              href="mailto:empleotororojo@gmail.com"
              className="mt-auto pt-6"
            >
              <span className="inline-flex w-auto items-center justify-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-background font-condensed font-bold uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-300 text-center">
                <Mail className="w-4 h-4" />
                Enviar CV
              </span>
            </a>
          </motion.div>
        </div>

        <p className="text-center text-muted-foreground text-sm mt-10 max-w-2xl mx-auto font-body">
          Las reservas se gestionan exclusivamente por WhatsApp. Escríbenos con el servicio que deseas y te confirmaremos disponibilidad de inmediato.
        </p>
      </div>
    </section>
  );
};

export default Booking;
