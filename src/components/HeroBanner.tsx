import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const images = [
  "https://images.unsplash.com/photo-1434389678219-16ffb4f63262?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2000&auto=format&fit=crop"
];

export function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-brand-sand/20">
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={img}
            alt="Conforto real"
            className="h-full w-full object-cover object-center opacity-90"
            referrerPolicy="no-referrer"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
        <div className="text-center text-white p-8 max-w-2xl">
          <h1 className="mb-4 text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl text-brand-cream drop-shadow-md">
            feito pra não querer tirar
          </h1>
          <p className="mb-8 text-lg font-light tracking-wide text-brand-cream/90 drop-shadow-sm">
            o uniforme oficial de ficar de boa.
          </p>
          <a
            href="#novo-drop"
            className="inline-block rounded-full bg-brand-cream px-8 py-3 text-sm font-medium tracking-widest text-brand-brown transition-colors hover:bg-brand-sand"
          >
            VER NOVO DROP
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
