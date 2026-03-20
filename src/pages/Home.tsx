import { HeroBanner } from '../components/HeroBanner';
import { ProductGrid } from '../components/ProductGrid';
import { SecondaryBanner } from '../components/SecondaryBanner';
import { novoDropProducts, disponivelAgoraProducts } from '../data/products';
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
      
      <div className="py-12 text-center bg-brand-cream border-b border-brand-sand/30 flex flex-col items-center justify-center gap-4">
        <img src="/smile.png" alt="Smile" className="h-12 w-12 object-contain" />
        <p className="text-sm font-medium tracking-widest text-brand-brown/80">
          Nothing Better than comfy. Feito pra não querer tirar
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
    </main>
  );
}
