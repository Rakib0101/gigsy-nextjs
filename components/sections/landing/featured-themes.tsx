import { getFeaturedThemes } from "@/data/categories";
import Image from "next/image";
import Link from "next/link";

const FeaturedThemes = () => {
  const themes = getFeaturedThemes();
  return (
    <section className="pt-40 pb-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center flex flex-col items-center gap-4">
          <h2 className="text-center text-4xl md:text-5xl font-bold font-serif text-[#2c2c2c] mb-2 tracking-wide">
            FEATURED THEMES
          </h2>
          <p className="text-base md:text-lg text-gray-500">
            Explore our collection of balloons for your next themed occasion
          </p>
          <Link
            href="/themes"
            className="inline-block text-2xl uppercase font-medium px-6 py-3 border border-gray-900 text-gray-900 rounded-xl"
          >
            Shop All
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-12">
          {themes.map((theme) => (
            <Link
              key={theme.slug}
              href={`/theme/${theme.slug}`}
              className="group relative rounded-lg overflow-hidden border border-gray-200 hover:scale-105 transition-transform duration-300"
            >
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

        <div className="mt-8 md:mt-16 grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-4 lg:gap-0">
          {/* Left: Image */}
          <div className="lg:col-span-2">
            <Image
              src="/images/theme-by-occasion.webp"
              alt="Gift Giving Heart Balloons"
              width={512}
              height={210}
              className="object-cover w-full max-h-[400px] rounded-xl"
              priority
            />
          </div>
          {/* Right: Text box */}
          <div className="flex-1 w-full lg:-ml-[20%] bg-[#f7f5f2] rounded-xl px-6 md:px-8 py-6 md:py-8 flex flex-col justify-center items-start shadow border border-gray-200 min-h-[210px] relative lg:relative z-10">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-[#232329] mb-3 leading-snug uppercase">
              Gift Giving Made Easy. Imagine That.
            </h3>
            <p className="mb-6 text-sm md:text-base text-[#46444e] font-medium">
              Because choosing someone a one-of-a-kind balloon should be as
              sweet as it sounds.
            </p>
            <Link
              href="/theme/occasion"
              className="inline-block text-base md:text-lg uppercase font-semibold mt-auto px-4 md:px-6 py-2 md:py-3 border border-gray-900 text-gray-900 rounded-xl hover:bg-gray-900 hover:text-white transition"
            >
              Shop Balloons by Occasion
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedThemes;
