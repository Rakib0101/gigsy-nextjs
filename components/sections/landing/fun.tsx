import Image from "next/image";

const Fun = () => {
  return (
    <div className="bg-[#3a3a3e] text-white py-16 px-4 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-2xl md:text-5xl font-bold mb-12">
          BALLOONS ARE FUN. SHOPPING FOR THEM SHOULD BE. TOO.
        </p>
        <div className="flex flex-wrap justify-center md:justify-around gap-4 md:gap-6 lg:gap-12 max-w-3xl mx-auto">
          <Image
            src="/images/logo.png"
            alt="JoyInFlate"
            width={103}
            height={30}
            className="w-20 md:w-[103px] h-auto"
            sizes="103px"
          />
          <Image
            src="/images/logo.png"
            alt="JoyInFlate"
            width={103}
            height={30}
            className="w-20 md:w-[103px] h-auto"
            sizes="103px"
          />
          <Image
            src="/images/logo.png"
            alt="JoyInFlate"
            width={103}
            height={30}
            className="w-20 md:w-[103px] h-auto"
            sizes="103px"
          />
        </div>
      </div>
    </div>
  );
};
export default Fun;
