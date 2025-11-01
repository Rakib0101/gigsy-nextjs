import { getBalloonsByShape } from "@/data/categories";
import Image from "next/image";
import Link from "next/link";

const BalloonsByShapePage = () => {
  const balloonsByShape = getBalloonsByShape();

  return (
    <>
      <section className="pt-40 pb-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          {/* Horizontal Line */}
          <div className="flex justify-center mb-6">
            <div className="w-32 h-px bg-[#2c2c2c]"></div>
          </div>

          {/* Title Banner */}
          <div className="flex justify-center mb-20">
            <div className="bg-[#fce4ec] rounded-lg px-12 py-5">
              <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-serif text-[#2c2c2c] uppercase tracking-wide">
                BALLOONS BY SHAPE
              </h1>
            </div>
          </div>

          {/* Categories Grid - Single row */}
          <div className="flex flex-row flex-wrap justify-center items-start gap-8 md:gap-12 lg:gap-16">
            {balloonsByShape.map((category) => (
              <Link
                key={category.slug}
                href={category.slug}
                className="group flex flex-col items-center max-w-[132px]"
              >
                {/* Circular Image Container with White Background */}
                <div className="relative w-[132px] h-[132px] rounded-full bg-white p-2 shadow-sm group-hover:scale-105 transition-all duration-300">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={132}
                      height={132}
                      className="w-full h-full rounded-full object-cover object-center"
                    />
                  </div>
                </div>
                <h3 className="text-center text-base md:text-lg uppercase font-serif font-medium text-[#2c2c2c] mt-4 tracking-wide">
                  {category.name} BALLOONS
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BalloonsByShapePage;
