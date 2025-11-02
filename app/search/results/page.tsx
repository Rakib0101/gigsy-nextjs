import ProductCard from "@/components/global/product-card";
import { searchProducts } from "@/data/products";

interface SearchResultsPageProps {
  searchParams: {
    q?: string;
  };
}

export default function SearchResultsPage({ searchParams }: SearchResultsPageProps) {
  const query = searchParams.q || "";
  const results = query ? searchProducts(query) : [];

  return (
    <>
      <section className="pt-40 pb-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-center text-4xl md:text-5xl font-serif text-[#2c2c2c] mb-8 tracking-wide">
            Search Results{query && ` for "${query}"`}
          </h2>
          {results.length === 0 ? (
            <p className="text-center text-lg text-gray-600">
              No products found matching your search.
            </p>
          ) : (
            <>
              <p className="text-center text-lg text-gray-600 mb-8">
                Found {results.length} {results.length === 1 ? "product" : "products"}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
