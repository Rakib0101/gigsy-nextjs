import FeaturedCategories from "@/components/sections/landing/featured-categories";
import FeaturedThemes from "@/components/sections/landing/featured-themes";
import Fun from "@/components/sections/landing/fun";
import Hero from "@/components/sections/landing/hero";
import Testimonial from "@/components/sections/landing/testimonial";
import Feature from "@/components/sections/landing/feature";
import ValueProps from "@/components/sections/landing/value-props";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Balloons Are Fun Section */}
      <Fun />

      {/* Featured Collections Section */}
      <FeaturedCategories />

      {/* Balloon Type Showcase */}
      <FeaturedThemes />

      {/* Testimonial Section */}
      <Testimonial />

      {/* Feature Section */}
      <Feature />

      {/* Value Props Section */}
      <ValueProps />
    </>
  );
}
