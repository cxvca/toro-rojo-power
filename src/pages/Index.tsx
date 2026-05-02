import Navbar from "@/components/toro/Navbar";
import Hero from "@/components/toro/Hero";
import Marquee from "@/components/toro/Marquee";
import Services from "@/components/toro/Services";
import Reviews from "@/components/toro/Reviews";
import Booking from "@/components/toro/Booking";
import Gallery from "@/components/toro/Gallery";
import WhyToro from "@/components/toro/WhyToro";
import Location from "@/components/toro/Location";
import Footer from "@/components/toro/Footer";
import FloatingWhatsApp from "@/components/toro/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Reviews />
        <Booking />
        <Gallery />
        <WhyToro />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
