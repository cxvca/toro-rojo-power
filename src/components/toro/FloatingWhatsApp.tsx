import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const [shaking, setShaking] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setShaking(true);
      setTimeout(() => setShaking(false), 700);
    }, 8000);
    return () => clearInterval(t);
  }, []);

  return (
    <a
      href="https://wa.me/34658041525?text=Hola!%20Me%20gustar%C3%ADa%20reservar%20una%20cita."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reservar por WhatsApp"
      className={`fixed bottom-5 right-5 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-500 hover:bg-green-400 text-background flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(34,197,94,0.6)] transition-all duration-300 ${shaking ? "shake" : ""}`}
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
      <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center border-2 border-background">
        1
      </span>
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
    </a>
  );
};

export default FloatingWhatsApp;
