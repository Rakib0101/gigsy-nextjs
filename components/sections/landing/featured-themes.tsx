import { getFeaturedThemes } from "@/data/categories";
import Image from "next/image";
import Link from "next/link";

const FeaturedThemes = () => {
  const themes = getFeaturedThemes();
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center flex flex-col items-center gap-4">
          <h2 className="text-center text-4xl md:text-5xl font-serif text-[#2c2c2c] mb-2 tracking-wide">
            FEATURED THEMES
          </h2>
          <p>
            Explore our collection of balloons for your next themed occasion
          </p>
          <Link
            href="/themes"
            className="inline-block text-2xl uppercase font-medium px-6 py-3 border border-gray-900 text-gray-900 rounded-xl"
          >
            Shop All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-12">
          {themes.map((theme) => (
            <Link key={theme.slug} href={`/categories/theme/${theme.slug}`} className="group relative rounded-lg overflow-hidden border border-gray-200 hover:scale-105 transition-transform duration-300">
              <Image
                src={theme.image}
                alt={theme.name}
                width={264}
                height={356}
                className="aspect-66/89 w-full h-full lg:min-h-[356px] object-cover"
              />
              <h3 className="absolute bottom-2 left-2 w-full text-lg md:text-3xl font-serif font-bold uppercase text-[#3a3a3e] tracking-wide px-2">
                {theme.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedThemes;
