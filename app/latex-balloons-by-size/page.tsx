import Image from "next/image";

const LatexBalloonsBySizePage = () => {
  const balloonSizes = [
    {
      name: "STANDARD",
      size: "11-",
      unit: "INCH",
      image: "/images/products/purple/purple-01.webp",
      color: "metallic purple",
    },
    {
      name: "LARGE",
      size: "17-",
      unit: "INCH",
      image: "/images/products/rose-gold/rose-gold-01.webp",
      color: "metallic rose gold",
    },
    {
      name: "JUMBO",
      size: "24-",
      unit: "INCH",
      image: "/images/products/gold/gold-01.webp",
      color: "metallic gold",
    },
  ];

  return (
    <>
      <section className="pt-40 pb-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          {/* Top Underline */}
          <div className="flex justify-center mb-6">
            <div className="w-32 h-px bg-[#2c2c2c]"></div>
          </div>

          {/* Main Title */}
          <div className="flex justify-center mb-20">
            <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-serif text-[#2c2c2c] uppercase tracking-wide">
              LATEX BALLOONS BY SIZE
            </h1>
          </div>

          {/* Balloons Grid - Three balloons horizontally */}
          <div className="flex flex-row flex-wrap justify-center items-start gap-8 md:gap-12 lg:gap-16 mb-20">
            {balloonSizes.map((balloon, index) => (
              <div
                key={index}
                className="flex flex-col items-center max-w-[200px]"
              >
                {/* Circular Image Container with White Background */}
                <div className="relative w-[200px] h-[200px] rounded-full bg-white p-4 shadow-sm">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={balloon.image}
                      alt={`${balloon.name} ${balloon.size}${balloon.unit} ${balloon.color} balloon`}
                      width={200}
                      height={200}
                      className="w-full h-full rounded-full object-cover object-center"
                    />
                  </div>
                </div>
                {/* Label - Two lines */}
                <h3 className="text-center text-base md:text-lg uppercase font-serif font-medium text-[#2c2c2c] mt-4 tracking-wide leading-tight">
                  <span className="block">
                    {balloon.name} {balloon.size}
                  </span>
                  <span className="block">{balloon.unit}</span>
                </h3>
              </div>
            ))}
          </div>

          {/* Bottom Separator */}
          <div className="flex justify-center mt-20">
            <div className="w-full max-w-6xl h-px bg-[#2c2c2c]"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatexBalloonsBySizePage;
