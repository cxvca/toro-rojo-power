import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Star, Tag, Crown, Scissors } from "lucide-react";
import BullSilhouette from "./BullSilhouette";

const WHATSAPP = "https://wa.me/34658041525";
const WHATSAPP_DISCOUNT =
  "https://wa.me/34658041525?text=Hola!%20Soy%20cliente%20nuevo%20y%20me%20gustar%C3%ADa%20reservar%20con%20el%2020%25%20de%20descuento.";
const WHATSAPP_VIP =
  "https://wa.me/34658041525?text=Hola!%20Quiero%20reservar%20el%20Ritual%20VIP%20Toro.";

const popularServices = [
  {
    icon: "✂️",
    name: "Corte Clásico o Moderno",
    desc: "Corte personalizado clásico o moderno según tu estilo, acabado con productos.",
    duration: "40 min",
    price: "20,00€",
  },
  {
    icon: "✂️",
    name: "Corte + Barba",
    desc: "Corte completo + arreglo y perfilado de barba, acabado profesional.",
    duration: "1h",
    price: "30,00€",
  },
  {
    icon: "✂️",
    name: "Corte para Niños (-7 años)",
    desc: "Corte adaptado para los más pequeños, trato especial y cuidadoso.",
    duration: "35 min",
    price: "12,00€",
  },
];

const allServices = [
  { icon: "🚿", name: "Lavado", desc: "Lavado de cabello con productos premium.", duration: "10 min", price: "3,00€" },
  { icon: "✏️", name: "Cejas", desc: "Perfilado y definición de cejas con navaja o hilo.", duration: "15 min", price: "6,00€" },
  { icon: "🎓", name: "Corte para Estudiantes", desc: "Corte clásico o moderno con tarjeta de estudiante.", duration: "35 min", price: "15,00€" },
  { icon: "💆", name: "Lavado y Peinado", desc: "Lavado + secado + peinado con acabado con productos de estilo.", duration: "30 min", price: "10,00€" },
  { icon: "🪒", name: "Barba", desc: "Arreglo, perfilado y definición de barba con navaja.", duration: "25 min", price: "12,00€" },
  { icon: "✂️", name: "Corte para Niños (-7 años)", desc: "Corte adaptado para niños menores de 7 años.", duration: "35 min", price: "12,00€" },
  { icon: "👴", name: "Corte para Jubilados", desc: "Corte clásico o moderno con descuento para jubilados.", duration: "35 min", price: "12,00€" },
  { icon: "✂️", name: "Corte Clásico o Moderno", desc: "Corte personalizado a tijera o máquina, lavado incluido.", duration: "40 min", price: "20,00€" },
  { icon: "✂️", name: "Corte + Barba", desc: "Pack completo: corte + arreglo de barba con acabado.", duration: "1h", price: "30,00€" },
];

const Counter = ({ to }: { to: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 1.6, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, count, to]);

  useEffect(() => {
    return rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = v;
    });
  }, [rounded]);

  return <span ref={ref}>0</span>;
};

const Services = () => {
  return (
    <section id="servicios" className="relative bg-steel py-24 md:py-32 overflow-hidden">
      <BullSilhouette className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.04] pointer-events-none" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="font-condensed uppercase tracking-[0.4em] text-gold text-sm mb-3">— Carta —</p>
          <h2 className="font-display text-6xl md:text-8xl text-primary tracking-wider">NUESTROS SERVICIOS</h2>

          {/* Rating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 mt-6 px-5 py-2 rounded-full border-2 border-gold bg-background/60"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="font-condensed font-bold text-gold uppercase tracking-wider text-sm">
              5.0 · <Counter to={25} /> reseñas verificadas en Booksy
            </span>
          </motion.div>
        </motion.div>

        {/* Discount Banner */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden bg-primary border-y-2 border-gold/40 my-12 rounded-sm"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, hsl(var(--primary)) 0px, hsl(var(--primary)) 20px, hsl(var(--primary-glow)) 20px, hsl(var(--primary-glow)) 21px)",
          }}
        >
          <div className="bg-primary/90 px-6 py-8 md:py-10 flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.6, delay: 0.3 }}
              className="text-6xl md:text-7xl shrink-0"
            >
              <Tag className="w-16 h-16 md:w-20 md:h-20 text-gold" strokeWidth={2.5} />
            </motion.div>
            <div className="flex-1">
              <h3 className="font-display text-3xl md:text-5xl text-primary-foreground tracking-wider leading-none">
                ¿PRIMERA VEZ EN TORO ROJO?
              </h3>
              <p className="font-display text-2xl md:text-3xl text-gold tracking-wider mt-1">
                20% DE DESCUENTO EN TU PRIMER CORTE
              </p>
              <p className="font-body text-xs md:text-sm text-foreground/80 mt-2 max-w-xl">
                Aplicable a nuevos clientes en todos los servicios de corte. Menciona el descuento al reservar por WhatsApp.
              </p>
            </div>
            <a
              href={WHATSAPP_DISCOUNT}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-background text-gold border-2 border-gold hover:bg-gold hover:text-background font-condensed font-bold uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-300 whitespace-nowrap"
            >
              Reservar con descuento
            </a>
          </div>
        </motion.div>

        {/* POPULAR SERVICES */}
        <div className="mb-16">
          <p className="font-condensed uppercase tracking-[0.3em] text-gold text-xs mb-5 text-center">
            — Los más reservados —
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularServices.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group bg-background border-l-[4px] border-primary hover:border-gold p-7 transition-all duration-300 hover:bg-card cursor-default"
              >
                <span className="absolute top-0 right-0 bg-primary text-primary-foreground font-condensed font-bold uppercase tracking-wider text-[10px] px-3 py-1">
                  Popular
                </span>
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-condensed font-bold text-2xl uppercase tracking-wide text-foreground mb-2 group-hover:text-primary-glow transition-colors">
                  {s.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="font-condensed text-xs uppercase tracking-widest text-gold">{s.duration}</span>
                  <span className="font-condensed font-bold text-gold text-xl">{s.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ALL SERVICES GRID */}
        <p className="font-condensed uppercase tracking-[0.3em] text-gold text-xs mb-5 text-center">
          — Carta completa —
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {allServices.map((s, i) => (
            <motion.div
              key={s.name + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group bg-background border-l-[3px] border-primary hover:border-gold p-6 transition-all duration-300 hover:bg-card cursor-default"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="text-3xl opacity-90">{s.icon}</div>
                <span className="font-condensed font-bold text-gold text-xs uppercase tracking-widest border border-gold/40 px-2 py-1 rounded-full whitespace-nowrap">
                  {s.duration}
                </span>
              </div>
              <h3 className="font-condensed font-bold text-xl uppercase tracking-wide text-foreground mb-2 group-hover:text-primary-glow transition-colors">
                {s.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">{s.desc}</p>
              <div className="font-condensed font-bold text-gold text-lg">{s.price}</div>
            </motion.div>
          ))}
        </div>

        {/* RITUAL VIP CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative mt-12 overflow-hidden rounded-sm border-2 border-gold p-8 md:p-12"
          style={{
            background:
              "linear-gradient(135deg, hsl(0 0% 5%) 0%, hsl(0 30% 10%) 60%, hsl(0 60% 15%) 100%)",
            boxShadow: "0 20px 60px -20px hsl(var(--gold) / 0.3)",
          }}
        >
          <span className="absolute top-0 right-0 bg-gold text-background font-condensed font-bold uppercase tracking-widest text-xs px-4 py-2">
            Experiencia Premium
          </span>
          <div className="flex flex-col md:flex-row items-start gap-8">
            <motion.div
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="shrink-0"
            >
              <Crown className="w-16 h-16 md:w-24 md:h-24 text-gold" strokeWidth={1.5} />
            </motion.div>
            <div className="flex-1">
              <p className="font-condensed uppercase tracking-[0.3em] text-gold text-xs mb-2">— La experiencia definitiva —</p>
              <h3 className="font-display text-4xl md:text-6xl text-foreground tracking-wider leading-none mb-4">
                RITUAL VIP TORO
              </h3>
              <p className="font-body text-foreground/80 leading-relaxed max-w-2xl mb-6">
                La experiencia definitiva de Toro Rojo. En 1h 30min te transformamos de arriba abajo: corte personalizado +
                arreglo de barba con navaja + perfilado de cejas + lavado premium + peinado con acabado + masaje capilar
                relajante + aplicación de productos de primera. El pack para quien quiere lucir el éxito de verdad.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
                <div>
                  <p className="font-condensed text-xs uppercase tracking-widest text-muted-foreground">Duración</p>
                  <p className="font-display text-2xl text-gold tracking-wider">1H 30 MIN</p>
                </div>
                <div>
                  <p className="font-condensed text-xs uppercase tracking-widest text-muted-foreground">Precio</p>
                  <p className="font-display text-3xl tracking-wider">
                    <span className="text-muted-foreground line-through text-xl mr-3">45,00€</span>
                    <span className="text-gold">36,00€</span>
                  </p>
                  <p className="font-condensed text-[11px] uppercase tracking-widest text-primary-glow">Precio nuevo cliente</p>
                </div>
              </div>
              <a
                href={WHATSAPP_VIP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold text-background hover:bg-gold/90 font-condensed font-bold uppercase tracking-widest px-8 py-3 rounded-full transition-all duration-300 shadow-gold"
              >
                <Crown className="w-4 h-4" /> Reservar Ritual VIP
              </a>
            </div>
          </div>
        </motion.div>

        {/* CTA general */}
        <div className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-condensed font-bold uppercase tracking-widest px-8 py-3 rounded-full transition-all duration-300"
          >
            <Scissors className="w-4 h-4" /> Ver disponibilidad en WhatsApp
          </a>
          <a
            href="https://booksy.com/es-es/dl/show-business/169791"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-background font-condensed font-bold uppercase tracking-widest px-8 py-3 rounded-full transition-all duration-300"
          >
            <Star className="w-4 h-4" /> Reservar en Booksy
          </a>
        </div>

        {/* Legal disclaimer */}
        <p className="text-center text-muted-foreground text-xs mt-10 font-body max-w-3xl mx-auto leading-relaxed">
          * El 20% de descuento para nuevos clientes aplica al primer servicio de corte (Corte Clásico, Corte + Barba o
          Corte Infantil). No acumulable con otras ofertas. Menciona el descuento al contactar por WhatsApp para reservar
          tu cita.
        </p>
      </div>
    </section>
  );
};

export default Services;
