import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

/* Reemplazar con imágenes reales del Instagram @tororojobarberia */
const images = [
  { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=900&q=80", alt: "Corte fade premium", span: "md:col-span-2 md:row-span-2" },
  { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80", alt: "Arreglo de barba", span: "" },
  { src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80", alt: "Barbería interior", span: "" },
  { src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80", alt: "Corte a tijera", span: "md:row-span-2" },
  { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80", alt: "Detalle navaja", span: "" },
  { src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&q=80", alt: "Estilo clásico", span: "" },
  { src: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=900&q=80", alt: "Cliente premium", span: "md:col-span-2" },
];

const Gallery = () => {
  return (
    <section id="galeria" className="bg-background py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-condensed uppercase tracking-[0.4em] text-gold text-sm mb-3">— Portfolio —</p>
          <h2 className="font-display text-6xl md:text-8xl text-primary tracking-wider">NUESTRO TRABAJO</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3">
          {images.map((img, i) => (
            <motion.a
              key={i}
              href="https://www.instagram.com/tororojobarberia"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative overflow-hidden bg-steel ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-10 h-10 text-foreground" />
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5" />
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/tororojobarberia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-condensed font-bold uppercase tracking-widest px-8 py-3 rounded-full transition-all duration-300"
          >
            <Instagram className="w-4 h-4" />
            Ver más en Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
