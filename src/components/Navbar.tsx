import { Search, ShoppingBag, User, Menu, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Navbar() {
  const [isRoupasOpen, setIsRoupasOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-cream/90 backdrop-blur-sm">
      <div className="bg-brand-sand/30 py-2 text-center text-xs font-medium tracking-wide text-brand-brown/80">
        Frete grátis acima de R$ 399 • 5% OFF no PIX
      </div>
      
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 sm:px-6 py-4">
        <div className="flex items-center gap-4 lg:hidden">
          <button className="text-brand-brown hover:text-brand-brown/70">
            <Menu className="h-5 w-5" />
          </button>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide flex-1">
          <div 
            className="relative group"
            onMouseEnter={() => setIsRoupasOpen(true)}
            onMouseLeave={() => setIsRoupasOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-brand-brown/70 transition-colors py-2">
              ROUPAS <ChevronDown className="h-4 w-4" />
            </button>
            
            {isRoupasOpen && (
              <div className="absolute top-full left-0 w-48 bg-brand-cream border border-brand-sand/30 shadow-lg py-2 flex flex-col">
                <Link to="/#disponivel" className="px-4 py-2 hover:bg-brand-sand/20 transition-colors">Tudo</Link>
                <Link to="/#novo-drop" className="px-4 py-2 hover:bg-brand-sand/20 transition-colors">Novo Drop</Link>
                <Link to="/#disponivel" className="px-4 py-2 hover:bg-brand-sand/20 transition-colors">Calças</Link>
                <Link to="/#disponivel" className="px-4 py-2 hover:bg-brand-sand/20 transition-colors">Blusas & Tops</Link>
                <Link to="/#disponivel" className="px-4 py-2 hover:bg-brand-sand/20 transition-colors">Conjuntos</Link>
              </div>
            )}
          </div>
          <Link to="/a-marca" className="hover:text-brand-brown/70 transition-colors py-2">A MARCA</Link>
        </nav>

        <div className="text-2xl font-bold tracking-[0.2em] uppercase flex-1 text-center whitespace-nowrap" style={{ fontFamily: "'Open Sans', sans-serif" }}>
          <Link to="/">NOTHING BETTER</Link>
        </div>

        <div className="flex items-center gap-5 flex-1 justify-end">
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
