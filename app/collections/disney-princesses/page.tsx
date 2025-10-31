import ProductCard from "@/components/global/product-card";
import { getDisneyPrincessesProducts } from "@/data/products/disney-princesses";

const DisneyPrincessesPage = () => {
  const products = getDisneyPrincessesProducts();
  return (
    <>
      <section className="pt-52 pb-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-center text-4xl md:text-5xl font-serif text-[#2c2c2c] mb-16 tracking-wide">
            DISNEY PRINCESSES
          </h2>
          <p className="text-center text-lg text-gray-600 mb-8">
            We offer a wide range of disney princesses balloons to help you create the perfect
            balloon display.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} colorCount={14} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DisneyPrincessesPage;
