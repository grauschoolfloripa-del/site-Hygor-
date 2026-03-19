export function SecondaryBanner() {
  return (
    <section className="relative h-[50vh] w-full overflow-hidden bg-brand-brown">
      <img
        src="https://images.unsplash.com/photo-1434389678369-182cb1432209?q=80&w=2000&auto=format&fit=crop"
        alt="Estilo sem esforço"
        className="h-full w-full object-cover object-center opacity-60 mix-blend-multiply"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-brand-cream p-8 max-w-2xl">
          <h2 className="mb-4 text-3xl font-light tracking-widest uppercase sm:text-4xl">
            pra usar sem pensar
          </h2>
          <p className="mb-8 text-sm font-medium tracking-wide text-brand-cream/80 uppercase">
            bonito sem parecer montado. natural, casual e elegante.
          </p>
          <a
            href="#disponivel"
            className="inline-block rounded-full bg-brand-cream px-8 py-3 text-sm font-medium tracking-widest text-brand-brown transition-colors hover:bg-brand-sand"
          >
            VER COLEÇÃO
          </a>
        </div>
      </div>
    </section>
  );
}
