import Checkbox from "@/components/global/svgs/checkbox";
import Pickup from "@/components/global/svgs/pickup";
import Assortments from "@/components/global/svgs/assortments";
import Image from "next/image";
import Arrow from "@/components/global/svgs/arrow";

const Feature = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-center text-4xl md:text-5xl font-serif text-[#2c2c2c] mb-16 tracking-wide">
          FEATURES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-[#f9f3f1] p-5 flex flex-col items-center justify-center gap-1.5 rounded-xl">
                <Pickup />
                <h2 className="text-lg uppercase font-bold">Same Day Delivery in NYC</h2>
                <p className="text-gray-500 text-xs text-center">We offer same-day delivery options in NYC. Select the delivery window that works best for you and we will take care of the rest.</p>
            </div>
            <div className="bg-[#f9f3f1] p-5 flex flex-col items-center justify-center gap-1.5 rounded-xl">
                <Checkbox />
                <h2 className="text-lg uppercase font-bold">Pickup Available</h2>
                <p className="text-gray-500 text-xs text-center">Need to grab something while you&apos;re out? Easily pickup from our NYC Tribeca location</p>
            </div>
            <div className="bg-[#f9f3f1] p-5 flex flex-col items-center justify-center gap-1.5 rounded-xl">
                <Assortments />
                <h2 className="text-lg uppercase font-bold">Curated Assortments</h2>
                <p className="text-gray-500 text-xs text-center">Shop our pre-selected assortments based on popular selections to take the guesswork out of buying balloons</p>
            </div>
        </div>
        <div className="pt-24">
            <div className="flex gap-4 bg-[#f9f3f1] rounded-xl max-w-[740px] mx-auto overflow-hidden">
                <Image src="/images/balloons/sun.webp" alt="Feature 1" width={222} height={264} className="object-cover" />
                <ul className="flex flex-col gap-4 py-12 px-6">
                    <li className="flex items-center gap-2 text-[44px] uppercase font-bold">
                        <Arrow />
                        <p>Curated</p>
                    </li>
                    <li className="flex items-center gap-2 text-[44px] uppercase font-bold">
                        <Arrow />
                        <p>Convenient</p>
                    </li>
                    <li className="flex items-center gap-2 text-[44px] uppercase font-bold">
                        <Arrow />
                        <p>Cool</p>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;