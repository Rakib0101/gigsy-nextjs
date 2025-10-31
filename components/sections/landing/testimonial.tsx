const Testimonial = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-[#3a3a3e]">
      <div className="container mx-auto max-w-7xl">
        <div className="">
          <div className="text-center flex flex-col items-center gap-2 md:gap-4 max-w-[1100px] mx-auto">
            <p className="text-[60px] md:text-[80px] lg:text-[100px] leading-[0.3] md:leading-[0.3] lg:leading-[30px] text-white">
              "
            </p>
            <h2 className="text-white text-lg md:text-2xl lg:text-[34px] font-bold max-w-[549px] px-2">
              You have been amazing , thank you so making this such an easy
              process!
            </h2>
          </div>
          <h3 className="text-white text-center md:text-right text-base md:text-xl lg:text-[24px] font-bold mt-8 md:mt-16">
            Bianca, NYC
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
