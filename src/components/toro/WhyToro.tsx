import { motion } from "framer-motion";
import { Zap, Gem, MapPin } from "lucide-react";

const items = [
  { icon: Zap, title: "PRECISIÓN", desc: "Cada corte es un acto de precisión. Sin atajos, sin excusas." },
  { icon: Gem, title: "PREMIUM", desc: "Productos de primera, técnica impecable. La imagen que mereces." },
  { icon: MapPin, title: "SALAMANCA", desc: "En el corazón del barrio más elegante de Madrid. Fácil de llegar, imposible de olvidar." },
];

const WhyToro = () => {
  return (
    <section id="equipo" className="bg-steel py-24 md:py-32 relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-condensed uppercase tracking-[0.4em] text-gold text-sm mb-3">— Marca —</p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground tracking-wider">
            POR QUÉ <span className="text-primary">TORO ROJO</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-background border border-border hover:border-primary p-8 md:p-10 text-center transition-colors duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-5 transition-transform duration-300 group-hover:rotate-[10deg] group-hover:scale-110">
                <it.icon className="w-8 h-8" />
              </div>
              <h3 className="font-display text-3xl md:text-4xl tracking-wider text-foreground mb-3">{it.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyToro;
