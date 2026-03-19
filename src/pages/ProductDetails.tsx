import { useParams, Link } from 'react-router-dom';
import { allProducts } from '../data/products';
import { ArrowLeft, Truck, ShieldCheck, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

export function ProductDetails() {
  const { id } = useParams();
  const product = allProducts.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState('');
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!product) {
    return (
      <main className="flex-grow flex flex-col items-center justify-center py-24 bg-brand-cream">
        <h2 className="text-2xl font-light text-brand-brown mb-4">Produto não encontrado</h2>
        <Link to="/" className="text-sm font-medium uppercase tracking-widest text-brand-brown/70 hover:text-brand-brown underline underline-offset-4">
          Voltar para o início
        </Link>
      </main>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Por favor, selecione um tamanho.');
      return;
    }
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <main className="flex-grow bg-brand-cream py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-brand-brown/60 hover:text-brand-brown mb-8 transition-colors uppercase tracking-widest">
          <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Image Gallery */}
          <div className="relative aspect-[3/4] bg-brand-sand/20 overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="h-full w-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            {product.isNew && (
              <span className="absolute left-4 top-4 rounded-sm bg-brand-brown px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-brand-cream">
                Novo Drop
              </span>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl font-light text-brand-brown mb-2">{product.name}</h1>
            <p className="text-xl font-medium text-brand-brown mb-6">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </p>
            
            <p className="text-sm text-brand-brown/80 mb-8 leading-relaxed font-light">
              Feito para não querer tirar. O conforto real que você precisa para o dia a dia, com modelagem solta e tecido macio. Uma peça versátil, pensada para relaxar em casa, mas bonita o suficiente para sair.
            </p>

            <div className="mb-8 border-t border-b border-brand-sand/30 py-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium tracking-widest uppercase text-brand-brown">Tamanho</span>
                <button className="text-xs font-light text-brand-brown/60 underline underline-offset-4 hover:text-brand-brown">
                  Guia de medidas
                </button>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {['P', 'M', 'G', 'GG'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 text-sm font-medium transition-colors border ${
                      selectedSize === size 
                        ? 'border-brand-brown bg-brand-brown text-brand-cream' 
                        : 'border-brand-brown/20 text-brand-brown hover:border-brand-brown'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={handleAddToCart}
              className={`w-full py-4 text-sm font-medium uppercase tracking-widest transition-colors flex items-center justify-center gap-2 ${
                isAdded 
                  ? 'bg-green-700 text-white' 
                  : 'bg-brand-brown text-brand-cream hover:bg-brand-brown/90'
              }`}
            >
              {isAdded ? 'Adicionado ao carrinho' : 'Adicionar ao carrinho'}
            </button>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3 text-sm text-brand-brown/70 font-light">
                <Truck className="h-5 w-5 text-brand-brown/40" />
                <span>Frete grátis para compras acima de R$ 399</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-brand-brown/70 font-light">
                <ShieldCheck className="h-5 w-5 text-brand-brown/40" />
                <span>Primeira troca grátis em até 30 dias</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-brand-brown/70 font-light">
                <Heart className="h-5 w-5 text-brand-brown/40" />
                <span>Produção em pequena escala</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
