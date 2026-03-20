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
    <Link to={`/product/${product.id}`} className="group relative flex flex-col overflow-hidden transition-all">
      <div className="relative aspect-[3/4] overflow-hidden bg-brand-sand/20">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="mt-4 flex flex-col text-left">
        <h3 className="text-sm font-medium text-brand-brown uppercase tracking-wide">{product.name}</h3>
        <p className="mt-1 text-sm font-light text-brand-brown/80">
          R$ {product.price.toFixed(2).replace('.', ',')}
        </p>
      </div>
    </Link>
  );
}
