import { Link } from 'react-router-dom';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  color: string;
  isNew?: boolean;
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link to={`/product/${product.id}`} className="group relative flex flex-col overflow-hidden bg-white/50 p-2 transition-all hover:bg-white">
      <div className="relative aspect-[3/4] overflow-hidden bg-brand-sand/20">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {product.isNew && (
          <span className="absolute left-2 top-2 rounded-sm bg-brand-brown px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-cream">
            Novo
          </span>
        )}
      </div>
      <div className="mt-4 flex flex-col text-center">
        <h3 className="text-sm font-medium text-brand-brown">{product.name}</h3>
        <p className="mt-1 text-xs text-brand-brown/70">{product.color}</p>
        <p className="mt-2 text-sm font-semibold text-brand-brown">
          R$ {product.price.toFixed(2).replace('.', ',')}
        </p>
        <button className="mt-4 w-full border border-brand-brown/20 bg-transparent py-2 text-xs font-medium uppercase tracking-widest text-brand-brown transition-colors group-hover:bg-brand-brown group-hover:text-brand-cream">
          Ver peça
        </button>
      </div>
    </Link>
  );
}
