import ProductCard from "@/components/global/product-card";
import { getLetterBalloons } from "@/data/products/letter-balloons";

const LetterBalloonsPage = () => {
  const letterBalloons = getLetterBalloons();
  return (
    <>
      <section className="pt-40 pb-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-center text-4xl md:text-5xl font-serif text-[#2c2c2c] mb-16 tracking-wide">
            LETTER BALLOONS
          </h2>
          <p className="text-center text-lg text-gray-600 mb-8">
            We offer a wide range of letter balloons to help you create the
            perfect balloon display. Spell out names, messages, or words!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {letterBalloons.map((product, index) => (
              <ProductCard key={product.id} product={product} colorCount={14} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LetterBalloonsPage;
