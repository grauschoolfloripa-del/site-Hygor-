import { ProductCard, Product } from './ProductCard';

export function ProductGrid({
  title,
  subtitle,
  products,
  bgColor = 'bg-brand-cream',
}: {
  title: string;
  subtitle?: string;
  products: Product[];
  bgColor?: string;
}) {
  return (
    <section className={`py-16 sm:py-24 ${bgColor}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-light tracking-widest text-brand-brown uppercase sm:text-3xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-sm font-medium tracking-wide text-brand-brown/60 uppercase">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
