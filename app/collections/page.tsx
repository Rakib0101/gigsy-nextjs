import {
  getBalloonsByColor,
  getBalloonsByOccasion,
  getBalloonsByShape,
  getBalloonsByType,
} from "@/data/categories";
import Image from "next/image";
import Link from "next/link";

const CollectionsPage = () => {
  const balloonsByOccasion = getBalloonsByOccasion();
  const balloonsByType = getBalloonsByType();
  const balloonsByShape = getBalloonsByShape();
  const balloonsByColor = getBalloonsByColor();
  return (
    <>
      <section className="pt-40 pb-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          {/* Title */}
          <h2 className="text-center text-4xl md:text-5xl font-serif text-[#2c2c2c] mb-16 tracking-wide">
            Balloons By Occasion
          </h2>

          {/* Categories Grid - Single row */}
          <div className="flex flex-row flex-wrap justify-center items-start gap-4 md:gap-8">
            {balloonsByOccasion.map((category) => (
              <Link
                key={category.slug}
                href={`${category.slug}`}
                className="group flex flex-col items-center max-w-[132px]"
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
        </div>
      </section>
      <section className="pt-40 pb-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          {/* Title */}
          <h2 className="text-center text-4xl md:text-5xl font-serif text-[#2c2c2c] mb-16 tracking-wide">
            Balloons By Type
          </h2>

          {/* Categories Grid - Single row */}
          <div className="flex flex-row flex-wrap justify-center items-start gap-4 md:gap-8">
            {balloonsByType.map((category) => (
              <Link
                key={category.slug}
                href={`/${category.slug}`}
                className="group flex flex-col items-center max-w-[132px]"
              >
                {/* Circular Image Container */}
                <Image
                  src={category.image}
                  alt={category.name}
                  width={132}
                  height={132}
                  className="size-[132px] rounded-full group-hover:scale-105 transition-all duration-300 object-cover object-top"
                />
                <h3 className="text-center text-lg uppercase font-medium text-[#2c2c2c] mt-2">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="pt-40 pb-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          {/* Title */}
          <h2 className="text-center text-4xl md:text-5xl font-serif text-[#2c2c2c] mb-16 tracking-wide">
            Balloons By Shape
          </h2>

          {/* Categories Grid - Single row */}
          <div className="flex flex-row flex-wrap justify-center items-start gap-4 md:gap-8">
            {balloonsByShape.map((category) => (
              <Link
                key={category.slug}
                href={`/${category.slug}`}
                className="group flex flex-col items-center max-w-[132px]"
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
        </div>
      </section>
      <section className="pt-40 pb-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          {/* Title */}
          <h2 className="text-center text-4xl md:text-5xl font-serif text-[#2c2c2c] mb-16 tracking-wide">
            Balloons By Color
          </h2>

          {/* Categories Grid - Single row */}
          <div className="flex flex-row flex-wrap justify-center items-start gap-4 md:gap-8">
            {balloonsByColor.map((category) => (
              <Link
                key={category.slug}
                href={`/${category.slug}`}
                className="group flex flex-col items-center max-w-[132px]"
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
        </div>
      </section>
    </>
  );
};

export default CollectionsPage;
