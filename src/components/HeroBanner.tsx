export function HeroBanner() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-brand-sand/20">
      <img
        src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop"
        alt="Conforto real"
        className="h-full w-full object-cover object-center opacity-90"
        referrerPolicy="no-referrer"
      />
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
    </section>
  );
}
