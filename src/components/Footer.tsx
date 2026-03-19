import { Instagram, Mail, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-brand-brown text-brand-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold tracking-widest uppercase">
                Logo
              </span>
              <Smile className="h-5 w-5 text-brand-cream/60" strokeWidth={1.5} />
            </div>
            <p className="text-sm leading-6 text-brand-cream/80 font-light">
              conforto real com estética limpa, leve e sem esforço.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-brand-cream/60 hover:text-brand-cream">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-brand-cream/60 hover:text-brand-cream">
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-brand-cream tracking-widest uppercase">
                  Shop
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link to="/#novo-drop" className="text-sm leading-6 text-brand-cream/70 hover:text-brand-cream font-light">
                      Novo Drop
                    </Link>
                  </li>
                  <li>
                    <Link to="/#disponivel" className="text-sm leading-6 text-brand-cream/70 hover:text-brand-cream font-light">
                      Disponível Agora
                    </Link>
                  </li>
                  <li>
                    <Link to="/#ultimas" className="text-sm leading-6 text-brand-cream/70 hover:text-brand-cream font-light">
                      Últimas Unidades
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-brand-cream tracking-widest uppercase">
                  Ajuda
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link to="/trocas-devolucoes" className="text-sm leading-6 text-brand-cream/70 hover:text-brand-cream font-light">
                      Trocas e Devoluções
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" className="text-sm leading-6 text-brand-cream/70 hover:text-brand-cream font-light">
                      Perguntas Frequentes
                    </Link>
                  </li>
                  <li>
                    <Link to="/contato" className="text-sm leading-6 text-brand-cream/70 hover:text-brand-cream font-light">
                      Contato
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="text-sm font-semibold leading-6 text-brand-cream tracking-widest uppercase">
                Fica por dentro dos próximos drops
              </h3>
              <p className="mt-2 text-sm leading-6 text-brand-cream/70 font-light">
                peças em pequena escala • cada drop é único
              </p>
              <form className="mt-6 sm:flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 appearance-none rounded-none border-0 bg-brand-cream/10 px-3 py-1.5 text-base text-brand-cream placeholder:text-brand-cream/40 focus:ring-2 focus:ring-inset focus:ring-brand-cream sm:w-64 sm:text-sm sm:leading-6 font-light"
                  placeholder="Seu melhor email"
                />
                <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-none bg-brand-cream px-3 py-2 text-sm font-semibold text-brand-brown shadow-sm hover:bg-brand-sand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cream uppercase tracking-widest"
                  >
                    Assinar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-brand-cream/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-brand-cream/50 font-light text-center">
            &copy; 2026 Logo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
