const Marquee = () => {
  const phrase = "LUCE EL ÉXITO, SIENTE EL PODER";
  const items = Array.from({ length: 8 }, (_, i) => i);
  return (
    <div className="relative bg-background border-y-2 border-blood py-5 overflow-hidden">
      <div className="flex marquee-track whitespace-nowrap">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center">
            {items.map((i) => (
              <span key={`${dup}-${i}`} className="flex items-center">
                <span className="font-display text-3xl md:text-5xl tracking-[0.25em] text-primary px-8">
                  {phrase}
                </span>
                <span className="text-gold text-2xl md:text-3xl">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
