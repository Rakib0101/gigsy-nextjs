"use client";
import { useEffect, useRef, useState } from "react";

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

function AccordionItem({
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
}) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [measuredHeight, setMeasuredHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setMeasuredHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen, q, a]);

  return (
    <div className="rounded-lg bg-[#35353a] text-white px-6 py-5 transition">
      <button
        onClick={() => onToggle(index)}
        className="w-full flex items-center justify-between text-left"
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${index}`}
      >
        <span className="font-medium text-base md:text-lg pr-4">{q}</span>
        <span className="border border-white rounded-full w-7 h-7 flex items-center justify-center select-none">
          <span className="text-2xl text-white leading-none transition-transform duration-300">
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
}

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
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
  );
}
