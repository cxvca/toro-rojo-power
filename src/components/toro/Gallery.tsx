import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import interior from "@/assets/gallery/interior.webp";
import fade from "@/assets/gallery/fade.jpg";
import barba from "@/assets/gallery/barba.jpg";
import camiseta from "@/assets/gallery/camiseta.jpg";
import barberos from "@/assets/gallery/barberos.jpg";
import equipo from "@/assets/gallery/equipo.jpg";
import navaja from "@/assets/gallery/navaja.jpg";

const images = [
  { src: interior, alt: "Interior de Toro Rojo Barbershop en Calle Alcalá 176" },
  { src: fade, alt: "Fade de precisión con navaja" },
  { src: equipo, alt: "Equipo de Toro Rojo Barbershop" },
  { src: barba, alt: "Ritual de arreglo de barba con toalla caliente" },
  { src: navaja, alt: "Trabajo a navaja con detalle premium" },
  { src: barberos, alt: "Barberos preparando herramientas" },
  { src: camiseta, alt: "Identidad Toro Rojo — camiseta oficial" },
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

        {/* Mobile: 2 columnas auto */}
        <div className="grid grid-cols-2 auto-rows-[200px] gap-3 md:hidden">
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
              className={`group relative overflow-hidden bg-steel ${i === 0 ? "col-span-2 row-span-2" : ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5" />
            </motion.a>
          ))}
        </div>

        {/* Tablet/Desktop: grid ordenado tipo mosaico */}
        <div className="hidden md:grid grid-cols-12 auto-rows-[180px] lg:auto-rows-[200px] gap-4">
          {/* Hero grande izquierda */}
          <GalleryItem img={images[0]} className="col-span-6 row-span-2" delay={0} />
          {/* Dos verticales arriba derecha */}
          <GalleryItem img={images[1]} className="col-span-3 row-span-2" delay={0.05} />
          <GalleryItem img={images[2]} className="col-span-3 row-span-2" delay={0.1} />
          {/* Fila inferior: 3 cuadradas + 1 ancha */}
          <GalleryItem img={images[3]} className="col-span-3 row-span-2" delay={0.15} />
          <GalleryItem img={images[4]} className="col-span-3 row-span-2" delay={0.2} />
          <GalleryItem img={images[5]} className="col-span-3 row-span-2" delay={0.25} />
          <GalleryItem img={images[6]} className="col-span-3 row-span-2" delay={0.3} />
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

const GalleryItem = ({
  img,
  className,
  delay,
}: {
  img: { src: string; alt: string };
  className: string;
  delay: number;
}) => (
  <motion.a
    href="https://www.instagram.com/tororojobarberia"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, scale: 0.96 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    className={`group relative overflow-hidden bg-steel ${className}`}
  >
    <img
      src={img.src}
      alt={img.alt}
      loading="lazy"
      className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
    />
    <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      <Instagram className="w-10 h-10 text-foreground" />
    </div>
    <div className="absolute inset-0 ring-1 ring-inset ring-foreground/5" />
  </motion.a>
);

export default Gallery;
