import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO = "https://ugc.production.linktr.ee/b72c8c8a-4d58-47e8-993a-608c20b5a73f_Logo-Toro-Rojo-variantes-17.jpeg";
const WHATSAPP = "https://wa.me/34658041525";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#equipo", label: "Equipo" },
  { href: "#contacto", label: "Contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b-2 border-blood ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-[0_4px_20px_rgba(176,28,28,0.3)]"
          : "bg-background/40 backdrop-blur-sm"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src={LOGO}
            alt="Toro Rojo Barbershop logo"
            crossOrigin="anonymous"
            className="h-12 w-12 object-contain rounded-sm mix-blend-screen brightness-110 contrast-125"
            loading="eager"
          />
          <span className="font-display text-2xl tracking-widest text-foreground hidden sm:inline">
            TORO <span className="text-primary">ROJO</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-condensed font-semibold text-sm uppercase tracking-widest text-foreground/85 hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-primary hover:bg-primary-glow text-primary-foreground font-condensed font-bold uppercase tracking-widest text-sm px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-red"
        >
          Reservar por WhatsApp
        </a>

        <button
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-foreground p-2"
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <X className="w-6 h-6" />
              </motion.span>
            ) : (
              <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                <Menu className="w-6 h-6" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-t border-border"
          >
            <div className="container py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    const id = l.href.replace("#", "");
                    setTimeout(() => {
                      const el = document.getElementById(id);
                      if (el) {
                        const y = el.getBoundingClientRect().top + window.scrollY - 80;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    }, 250);
                  }}
                  className="font-condensed font-semibold text-lg uppercase tracking-widest text-foreground hover:text-primary"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-condensed font-bold uppercase tracking-widest px-5 py-3 rounded-full"
              >
                Reservar por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
