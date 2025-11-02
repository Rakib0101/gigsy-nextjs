import {
  getFeaturedCategories,
  getFeaturedSquareCategories,
} from "@/data/categories";
import Image from "next/image";
import Link from "next/link";

const FeaturedCategories = () => {
  const featuredCategories = getFeaturedCategories();
  const featuredSquareCategories = getFeaturedSquareCategories();
  return (
    <section className="pt-40 pb-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <h2 className="text-center text-4xl lg:text-5xl font-bold font-serif text-[#2c2c2c] mb-16 tracking-wide">
          FEATURED COLLECTIONS
        </h2>

        {/* Categories Grid - Single row */}
        <div className="flex flex-row flex-wrap justify-center items-start gap-4 md:gap-8">
          {featuredCategories.map((category) => (
            <Link
              key={category.slug}
              href={`${category.slug}`}
              className="group flex flex-col items-center max-w-[100px] md:max-w-[132px]"
            >
              {/* Circular Image Container */}
              <Image
                src={category.image}
                alt={category.name}
                width={132}
                height={132}
                className="w-full h-full rounded-full group-hover:scale-105 transition-all duration-300 object-cover"
              />
              <h3 className="text-center text-lg uppercase font-medium text-[#2c2c2c] mt-2">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-6 pt-20 lg:pt-32">
          {featuredSquareCategories.map((category) => (
            <Link
              key={category.slug}
              href={`${category.slug}`}
              className="p-4 md:p-8 flex flex-col items-center bg-[#2C2C2C] rounded-lg shadow-md group hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={category.image}
                alt={category.name}
                width={130}
                height={180}
                className="object-contain w-full h-auto -mt-12 md:-mt-20 mx-auto"
                draggable={false}
                priority
              />
              <div className="w-full flex-1 flex items-end">
                <h3 className="w-full text-center text-lg md:text-2xl font-serif font-bold uppercase text-white tracking-wide px-2">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
