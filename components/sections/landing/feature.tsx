"use client";
import Arrow from "@/components/global/svgs/arrow";
import Assortments from "@/components/global/svgs/assortments";
import Checkbox from "@/components/global/svgs/checkbox";
import Pickup from "@/components/global/svgs/pickup";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Feature = () => {
  const faqs = [
    {
      q: "Where do you deliver?",
      a: "We currently offer delivery throughout the New York City and surrounding area.",
    },
    {
      q: "It says you don't deliver to me when I enter my zip code.",
      a: "Please contact support with your zip code. We are expanding zones and can often accommodate special requests.",
    },
    {
      q: "Do your balloons arrive inflated with helium?",
      a: "Yes, unless otherwise noted, balloons arrive pre-inflated and ready to enjoy.",
    },
    {
      q: "Help! I need delivery for a certain time or date that is no longer showing up as available.",
      a: "Reach out via email or phone and we'll do our best to fit you in or suggest alternatives.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  const AccordionItem = ({
    q,
    a,
    isOpen,
    onToggle,
    index,
  }: {
    q: string;
    a: string;
    isOpen: boolean;
    onToggle: (idx: number) => void;
    index: number;
  }) => {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [measuredHeight, setMeasuredHeight] = useState(0);

    useEffect(() => {
      if (contentRef.current) {
        setMeasuredHeight(contentRef.current.scrollHeight);
      }
    }, [isOpen, q, a]);

    return (
      <div
        className={`rounded-lg bg-[#35353a] text-white px-6 py-5 transition`}
      >
        <button
          onClick={() => onToggle(index)}
          className="w-full flex items-center justify-between text-left"
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${index}`}
        >
          <span className="font-medium text-base md:text-lg pr-4">{q}</span>
          <span className="border border-white rounded-full w-7 h-7 flex items-center justify-center select-none">
            <span
              className={`text-2xl text-white leading-none transition-transform duration-300 ${
                isOpen ? "" : ""
              }`}
            >
              {isOpen ? "−" : "+"}
            </span>
          </span>
        </button>
        <div
          id={`faq-panel-${index}`}
          className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
          style={{ maxHeight: isOpen ? measuredHeight : 0 }}
        >
          <div
            ref={contentRef}
            className="mt-3 text-base md:text-lg text-left leading-snug pb-4"
          >
            {a}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="pt-20 pb-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-[#f9f3f1] p-5 flex flex-col items-center justify-center gap-1.5 rounded-xl">
              <Pickup />
              <h2 className="text-lg uppercase font-bold">
                Same Day Delivery in NYC
              </h2>
              <p className="text-gray-500 text-xs text-center">
                We offer same-day delivery options in NYC. Select the delivery
                window that works best for you and we will take care of the
                rest.
              </p>
            </div>
            <div className="bg-[#f9f3f1] p-5 flex flex-col items-center justify-center gap-1.5 rounded-xl">
              <Checkbox />
              <h2 className="text-lg uppercase font-bold">Pickup Available</h2>
              <p className="text-gray-500 text-xs text-center">
                Need to grab something while you&apos;re out? Easily pickup from
                our NYC Tribeca location
              </p>
            </div>
            <div className="bg-[#f9f3f1] p-5 flex flex-col items-center justify-center gap-1.5 rounded-xl">
              <Assortments />
              <h2 className="text-lg uppercase font-bold">
                Curated Assortments
              </h2>
              <p className="text-gray-500 text-xs text-center">
                Shop our pre-selected assortments based on popular selections to
                take the guesswork out of buying balloons
              </p>
            </div>
          </div>
          <div className="pt-12 md:pt-24">
            <div className="flex flex-col md:flex-row gap-4 bg-[#f9f3f1] rounded-xl max-w-[740px] mx-auto overflow-hidden">
              <Image
                src="/images/balloons/sun.webp"
                alt="Feature 1"
                width={222}
                height={264}
                className="object-cover w-full md:w-auto"
              />
              <ul className="flex flex-col gap-2 md:gap-4 py-6 md:py-12 px-4 md:px-6">
                <li className="flex items-center gap-2 text-2xl md:text-3xl lg:text-[44px] uppercase font-bold">
                  <Arrow />
                  <p>Curated</p>
                </li>
                <li className="flex items-center gap-2 text-2xl md:text-3xl lg:text-[44px] uppercase font-bold">
                  <Arrow />
                  <p>Convenient</p>
                </li>
                <li className="flex items-center gap-2 text-2xl md:text-3xl lg:text-[44px] uppercase font-bold">
                  <Arrow />
                  <p>Cool</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        className="py-12 md:py-20 px-4"
        style={{
          backgroundImage: "url('/images/bg-instagram.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-center items-center">
            <div className="w-full text-center flex flex-col gap-3 md:gap-4 items-center justify-center max-w-[360px] bg-white/40 backdrop-blur-sm border border-white-200 rounded-xl px-4 md:px-6 py-8 md:py-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl uppercase font-bold">
                @joyinflate
              </h2>
              <p className="text-gray-500 uppercase text-base md:text-lg lg:text-xl">
                Follow us on Instagram
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto">
          <div className="max-w-[825px] mx-auto flex flex-col lg:flex-row gap-6 md:gap-8 rounded-2xl bg-[#f9f3f1] px-4 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16">
            {/* Left column: Help text and contact */}
            <div className="flex-1 flex flex-col">
              <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-[#46444e] mb-2">
                NEED HELP?
              </h2>
              <p className="text-base md:text-lg text-[#46444e] mb-6 font-medium">
                Email or call us and we’ll get back to you shortly!
              </p>
              <div className="flex flex-col gap-2 text-sm text-[#46444e]">
                <div>
                  <span className="font-semibold uppercase tracking-wider">
                    Email:
                  </span>
                  <br />
                  <a
                    href="mailto:hello@agencykay.com"
                    className="underline font-medium text-base"
                  >
                    hello@agencykay.com
                  </a>
                </div>
                <div>
                  <span className="font-semibold uppercase tracking-wider">
                    Phone:
                  </span>
                  <br />
                  <a href="tel:+16463754057" className="font-medium text-base">
                    +1 646-375-4057
                  </a>
                </div>
              </div>
            </div>
            {/* Right column: FAQs */}
            <div className="flex-1 flex flex-col gap-3">
              {faqs.map((item, idx) => (
                <AccordionItem
                  key={item.q}
                  q={item.q}
                  a={item.a}
                  isOpen={openIndex === idx}
                  onToggle={toggle}
                  index={idx}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto pb-12">
        <div className="max-w-xl mx-auto flex flex-col md:flex-row justify-between rounded-xl bg-[#f9f3f1] px-4 md:px-8 py-6 md:py-8">
          {/* Left section: Pickup info */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-[#46444e] mb-4 leading-none">
              PICK UP
              <br />
              AVAILABLE
            </h2>
            <p className="text-[#46444e] mb-1">
              325 Greenwich St.
              <br />
              New York, NY 10013
            </p>
            <p className="text-[#46444e] text-sm">Suite downstairs</p>
          </div>
          {/* Right section: Hours & Directions */}
          <div className="flex-1 flex flex-col items-start md:items-end mt-6 md:mt-0">
            <h3 className="text-lg font-semibold text-[#46444e] mb-2">HOURS</h3>
            <div className="text-[#46444e] text-right text-sm mb-3">
              <div>
                Monday - Friday
                <br />
                <span className="ml-1">10:30 – 19:00</span>
              </div>
              <div className="mt-1">
                Saturday & Sunday
                <br />
                <span className="ml-1">12:00 – 18:00</span>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=325+Greenwich+St,+New+York,+NY+10013"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-[#232329] text-white py-2 px-6 rounded font-semibold shadow hover:bg-[#3a3a3e] transition-colors text-sm"
            >
              GET DIRECTIONS
            </a>
          </div>
        </div>
      </div>
      <section>
        <div className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center text-[#232329] text-2xl md:text-3xl font-bold mb-8">
              What Our Customers Are Saying About Us
            </h2>
            <div className="flex flex-col gap-5">
              {/* Header: profile & write review button */}
              <div className="flex justify-between items-center mb-4 bg-[#f7f9fb] p-6 rounded-xl">
                <div className="flex gap-3 items-center">
                  {/* Company logo */}
                  <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-white p-1.5 border border-[#eaeaea]">
                    <Image
                      src="/images/logo.png"
                      alt="Glosy Balloons"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-[#29243d] text-base leading-tight">
                      Joyinflate Balloons
                    </div>
                    <div className="flex items-center text-yellow-400">
                      <span className="text-[16px]">★★★★★</span>
                      <span className="ml-1 text-xs font-semibold text-[#46444e]">
                        5.0
                      </span>
                      <span className="mx-2 text-[#bcbcbc] text-xs">·</span>
                    </div>
                    <p className="text-xs text-[#727272]">131 Google reviews</p>
                  </div>
                </div>
                <a
                  href="https://search.google.com/local/writereview?placeid=ChIJwQfRcrlZwokRQjzb7mWgtsw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#466af4] text-white px-4 py-2 rounded font-semibold text-sm shadow hover:bg-[#3450a7] transition-colors"
                >
                  Write a Review
                </a>
              </div>

              {/* Carousel of reviews */}
              <div className="w-full overflow-x-auto">
                <div className="flex gap-3 md:min-w-0 md:justify-center">
                  <div className="w-full min-w-[280px] md:w-72 bg-[#f9f9fb] rounded-lg shadow p-4 flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-[#29243d] text-xs opacity-80 mb-1">
                      <span>Mar 30, 2024</span>
                    </div>
                    <div className="text-yellow-400 text-[16px] leading-none">
                      ★★★★★
                    </div>
                    <div className="text-[#29243d] text-sm flex-1 mt-1">
                      The first wholesale experience I&apos;ve ever had with a
                      balloon vendor. Quality was perfect and communication was
                      amazing. Definitely recommend!
                    </div>
                    <a
                      href="#"
                      className="text-[#466af4] text-xs mt-2 hover:underline"
                    >
                      Read More
                    </a>
                  </div>
                  <div className="w-full min-w-[280px] md:w-72 bg-[#f9f9fb] rounded-lg shadow p-4 flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-[#29243d] text-xs opacity-80 mb-1">
                      <span>Mar 28, 2024</span>
                    </div>
                    <div className="text-yellow-400 text-[16px] leading-none">
                      ★★★★★
                    </div>
                    <div className="text-[#29243d] text-sm flex-1 mt-1">
                      I ordered from Glosy, received a lot of compliments on the
                      products & amazing service, because they went above and
                      beyond.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
