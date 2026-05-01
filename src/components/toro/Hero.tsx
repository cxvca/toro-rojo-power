import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import BullSilhouette from "./BullSilhouette";

const WHATSAPP = "https://wa.me/34658041525?text=Hola!%20Me%20gustar%C3%ADa%20reservar%20una%20cita%20en%20Toro%20Rojo%20Barbershop.";

const word1 = "TORO".split("");
const word2 = "ROJO".split("");

const letterVariants = {
  hidden: { opacity: 0, x: -40, skewX: -15 },
  visible: { opacity: 1, x: 0, skewX: 0 },
};

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background leather-texture pt-24"
    >
      {/* Background bull watermark */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 0.06, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <BullSilhouette className="w-[110vmin] h-[110vmin] max-w-none" />
      </motion.div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background pointer-events-none" />

      <div className="container relative z-10 text-center py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.04, delayChildren: 0.1 }}
          className="font-display text-[18vw] md:text-[12rem] leading-[0.85] text-foreground tracking-wider text-shadow-red flex justify-center gap-[1vw] flex-wrap"
        >
          {word1.map((c, i) => (
            <motion.span key={`a-${i}`} variants={letterVariants} transition={{ duration: 0.45, ease: "easeOut" }}>
              {c}
            </motion.span>
          ))}
          <span className="w-[2vw]" />
          {word2.map((c, i) => (
            <motion.span
              key={`b-${i}`}
              variants={letterVariants}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="text-primary"
            >
              {c}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="font-display text-2xl md:text-5xl text-gold tracking-[0.25em] mt-4"
        >
          LUCE EL ÉXITO, SIENTE EL PODER
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="font-condensed uppercase tracking-[0.2em] text-foreground/80 mt-6 text-sm md:text-base"
        >
          Barbería premium · Calle Alcalá 176, Madrid
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-10 flex justify-center"
        >
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="pulse-glow inline-flex items-center gap-3 bg-primary hover:bg-primary-glow text-primary-foreground font-condensed font-bold uppercase tracking-[0.18em] text-base md:text-lg px-8 md:px-12 py-4 md:py-5 rounded-full transition-colors duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Reservar cita por WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-condensed text-xs uppercase tracking-[0.3em] text-foreground/60">Scroll</span>
        <div className="w-[2px] h-12 bg-primary/30 relative overflow-hidden">
          <span className="block w-full h-full bg-primary scrollbar-line origin-top" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
