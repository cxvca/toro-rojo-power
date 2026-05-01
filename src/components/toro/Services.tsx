import { motion } from "framer-motion";
import BullSilhouette from "./BullSilhouette";

const WHATSAPP = "https://wa.me/34658041525";

const services = [
  { icon: "✂️", name: "Corte Clásico", desc: "Corte de cabello personalizado según tu estilo", price: "desde 15€" },
  { icon: "✂️", name: "Corte Degradado / Fade", desc: "Degradado preciso a máquina y tijera", price: "desde 18€" },
  { icon: "✂️", name: "Corte + Barba", desc: "Pack completo: corte y arreglo de barba", price: "desde 25€" },
  { icon: "🪒", name: "Arreglo de Barba", desc: "Perfilado, diseño y contorno con navaja", price: "desde 12€" },
  { icon: "🪒", name: "Afeitado Clásico", desc: "Ritual de afeitado con toalla caliente y navaja", price: "desde 18€" },
  { icon: "💈", name: "Corte Infantil", desc: "Para los más pequeños (hasta 12 años)", price: "desde 12€" },
  { icon: "💈", name: "Corte a Tijera", desc: "Técnica artesanal, acabado natural", price: "desde 20€" },
  { icon: "🎨", name: "Color / Tinte", desc: "Coloración natural sin amoniacos", price: "Consultar" },
];

const Services = () => {
  return (
    <section id="servicios" className="relative bg-steel py-24 md:py-32 overflow-hidden">
      <BullSilhouette className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.04] pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-condensed uppercase tracking-[0.4em] text-gold text-sm mb-3">— Carta —</p>
          <h2 className="font-display text-6xl md:text-8xl text-primary tracking-wider">NUESTROS SERVICIOS</h2>
          <p className="font-body text-foreground/70 mt-4 max-w-xl mx-auto">
            Precisión, técnica y carácter. Cada servicio, ejecutado por barberos profesionales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-background border-l-[3px] border-primary hover:border-gold p-7 transition-all duration-300 hover:bg-card cursor-default"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="text-3xl opacity-90">{s.icon}</div>
                <span className="font-condensed font-bold text-gold text-lg whitespace-nowrap">{s.price}</span>
              </div>
              <h3 className="font-condensed font-bold text-2xl uppercase tracking-wide text-foreground mb-2 group-hover:text-primary-glow transition-colors">
                {s.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-xs mt-10 font-body">
          Precios orientativos. Consulta disponibilidad y tarifas exactas por WhatsApp.
        </p>

        <div className="text-center mt-8">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-condensed font-bold uppercase tracking-widest px-8 py-3 rounded-full transition-all duration-300"
          >
            Ver disponibilidad en WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
