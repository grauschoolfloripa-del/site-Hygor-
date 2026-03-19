import { HeroBanner } from '../components/HeroBanner';
import { ProductGrid } from '../components/ProductGrid';
import { SecondaryBanner } from '../components/SecondaryBanner';
import { Smile } from 'lucide-react';
import { novoDropProducts, disponivelAgoraProducts, ultimasUnidadesProducts } from '../data/products';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <main className="flex-grow">
      <HeroBanner />
      
      <div className="py-12 text-center bg-brand-cream border-b border-brand-sand/30 flex flex-col items-center justify-center gap-3">
        <Smile className="h-5 w-5 text-brand-brown/40" strokeWidth={1.5} />
        <p className="text-sm font-medium tracking-widest text-brand-brown/70 uppercase">
          peças em pequena escala • cada drop é único
        </p>
      </div>

      <div id="novo-drop">
        <ProductGrid 
          title="Novo Drop" 
          products={novoDropProducts} 
          bgColor="bg-brand-cream"
        />
      </div>

      <div id="disponivel">
        <ProductGrid 
          title="Disponível Agora" 
          products={disponivelAgoraProducts} 
          bgColor="bg-brand-sand/10"
        />
      </div>

      <SecondaryBanner />

      <div id="ultimas">
        <ProductGrid 
          title="Últimas Unidades" 
          subtitle="peças com estoque reduzido"
          products={ultimasUnidadesProducts} 
          bgColor="bg-brand-cream"
        />
      </div>
    </main>
  );
}
