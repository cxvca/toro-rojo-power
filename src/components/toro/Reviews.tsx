import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const BOOKSY_URL = "https://booksy.com/es-es/169791_toro-rojo-barber-shop-sl_barberia_53009_madrid";

const reviews = [
  {
    name: "José Luis",
    service: "Corte Clásico",
    text: "Me aconsejó con respecto al corte que quería hacerme y lo adaptó a la forma de mi cráneo y cara, consiguiendo un resultado con el que estoy muy satisfecho.",
  },
  {
    name: "Milton",
    service: "Corte + Barba",
    text: "Excelente lugar, muy buena atención por parte de Luis.",
  },
  {
    name: "Asdrubal",
    service: "Barba",
    text: "Servicio y resultado profesional. Un agradable servicio al cliente.",
  },
  {
    name: "Sebastian",
    service: "Corte Clásico",
    text: "Excelente servicio desde el minuto 1. Lo recomiendo al 100%.",
  },
  {
    name: "Angel",
    service: "Corte Clásico",
    text: "Excelente servicio. 💯",
  },
];

const Reviews = () => {
  // Duplicate for infinite scroll
  const loop = [...reviews, ...reviews];

  return (
    <section id="resenas" className="relative bg-background py-24 md:py-32 overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-condensed uppercase tracking-[0.4em] text-gold text-sm mb-3">— Lo que dicen de nosotros —</p>
          <h2 className="font-display text-5xl md:text-7xl text-primary tracking-wider">RESEÑAS REALES</h2>

          <div className="inline-flex items-center gap-3 mt-6 px-5 py-2 rounded-full border-2 border-gold bg-steel">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="font-condensed font-bold text-gold uppercase tracking-wider text-sm">
              5.0 / 5 · 25 reseñas verificadas
            </span>
          </div>
        </motion.div>
      </div>

      {/* Auto-scroll carousel */}
      <div className="relative overflow-hidden py-6">
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 marquee-track w-max">
          {loop.map((r, i) => (
            <div
              key={i}
              className="relative w-[320px] md:w-[400px] shrink-0 bg-steel border border-border hover:border-gold/60 p-7 rounded-sm transition-all duration-300"
            >
              <Quote className="absolute top-4 right-5 w-10 h-10 text-gold/30" strokeWidth={2} />
              <div className="flex mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-body text-foreground/90 leading-relaxed mb-5 text-sm md:text-base">"{r.text}"</p>
              <div className="border-t border-border pt-3">
                <p className="font-condensed font-bold text-foreground uppercase tracking-wide">{r.name}</p>
                <p className="font-condensed text-primary-glow text-xs uppercase tracking-widest">{r.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container text-center mt-12">
        <a
          href={BOOKSY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gold text-background hover:bg-gold/90 font-condensed font-bold uppercase tracking-widest px-8 py-3 rounded-full transition-all duration-300 shadow-gold"
        >
          Ver todas las reseñas en Booksy
        </a>
      </div>
    </section>
  );
};

export default Reviews;
