import { Search, ShoppingBag, User, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-brand-cream/90 backdrop-blur-sm">
      <div className="bg-brand-sand/30 py-2 text-center text-xs font-medium tracking-wide text-brand-brown/80">
        Até 5x sem juros • Frete grátis acima de R$ 399 • 5% OFF no PIX • Primeira troca grátis
      </div>
      
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4 lg:hidden">
          <button className="text-brand-brown hover:text-brand-brown/70">
            <Menu className="h-5 w-5" />
          </button>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
          <Link to="/#novo-drop" className="hover:text-brand-brown/70 transition-colors">NOVO DROP</Link>
          <Link to="/#disponivel" className="hover:text-brand-brown/70 transition-colors">SHOP</Link>
          <Link to="/#sobre" className="hover:text-brand-brown/70 transition-colors">A MARCA</Link>
        </nav>

        <div className="text-2xl font-semibold tracking-widest uppercase">
          <Link to="/">Logo</Link>
        </div>

        <div className="flex items-center gap-5">
          <button className="hidden sm:block text-brand-brown hover:text-brand-brown/70 transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <button className="hidden sm:block text-brand-brown hover:text-brand-brown/70 transition-colors">
            <User className="h-5 w-5" />
          </button>
          <button className="text-brand-brown hover:text-brand-brown/70 transition-colors relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-brown text-[9px] font-bold text-brand-cream">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
