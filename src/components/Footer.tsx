import { Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-brand-brown text-brand-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* BLOCO 1 - Esquerda */}
          <div className="space-y-6">
            <div className="text-2xl font-bold tracking-[0.2em] uppercase" style={{ fontFamily: "'Open Sans', sans-serif" }}>
              NOTHING BETTER
            </div>
            <div className="space-y-1">
              <p className="text-sm leading-6 text-brand-cream/80 font-light">
                Nothing Better than comfy
              </p>
              <p className="text-sm leading-6 text-brand-cream/80 font-light">
                Feito pra não querer tirar
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/nothingbetterstore/" target="_blank" rel="noopener noreferrer" className="text-brand-cream/60 hover:text-brand-cream transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@nothingbetterstore" target="_blank" rel="noopener noreferrer" className="text-brand-cream/60 hover:text-brand-cream transition-colors flex items-center justify-center">
                <span className="sr-only">TikTok</span>
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <Link to="/contato" className="text-brand-cream/60 hover:text-brand-cream transition-colors">
                <span className="sr-only">Email</span>
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* BLOCO 2 - Centro */}
          <div className="flex flex-col md:items-center">
            <ul role="list" className="space-y-4">
              <li>
                <Link to="/contato" className="text-sm leading-6 text-brand-cream/70 hover:text-brand-cream font-light transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm leading-6 text-brand-cream/70 hover:text-brand-cream font-light transition-colors">
                  Dúvidas Frequentes
                </Link>
              </li>
              <li>
                <Link to="/trocas-devolucoes" className="text-sm leading-6 text-brand-cream/70 hover:text-brand-cream font-light transition-colors">
                  Trocas e Devoluções
                </Link>
              </li>
            </ul>
          </div>

          {/* BLOCO 3 - Direita */}
          <div className="md:text-right">
            <p className="text-sm font-medium leading-6 text-brand-cream tracking-widest uppercase">
              Fique por dentro dos nossos próximos drops
            </p>
            <p className="mt-2 text-sm leading-6 text-brand-cream/70 font-light">
              Assine nossa newsletter
            </p>
            <form className="mt-6 flex md:justify-end">
              <label htmlFor="email-address" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full md:w-64 min-w-0 appearance-none rounded-none border-0 bg-brand-cream/10 px-3 py-2 text-sm text-brand-cream placeholder:text-brand-cream/40 focus:ring-1 focus:ring-inset focus:ring-brand-cream font-light"
                placeholder="Seu melhor email"
              />
              <button
                type="submit"
                className="flex items-center justify-center rounded-none bg-brand-cream px-4 py-2 text-xs font-semibold text-brand-brown hover:bg-brand-sand transition-colors uppercase tracking-widest"
              >
                Assinar
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 border-t border-brand-cream/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-brand-cream/50 font-light text-center">
            &copy; 2026 NOTHING BETTER. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
