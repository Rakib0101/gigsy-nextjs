import Link from 'next/link'
import Hero from '@/components/sections/landing/hero'
import Fun from '@/components/sections/landing/fun'
import FeaturedCategories from '@/components/sections/landing/featured-categories'

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
      <div className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/categories/number-balloons" className="group">
              <div className="relative h-80 bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl md:text-9xl font-bold text-white">4</div>
                    <div className="text-8xl md:text-9xl font-bold text-white">2</div>
                    <div className="text-8xl md:text-9xl font-bold text-white">5</div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gray-900 text-white py-3 px-6">
                  <p className="text-xl font-semibold">NUMBER BALLOONS</p>
                </div>
              </div>
            </Link>
            <Link href="/categories/letter-balloons" className="group">
              <div className="relative h-80 bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-9xl md:text-[200px] font-bold text-white">A</div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gray-900 text-white py-3 px-6">
                  <p className="text-xl font-semibold">LETTER BALLOONS</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-gray-800 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="text-8xl font-bold mb-6 opacity-50">&quot;</div>
            <p className="text-xl md:text-2xl mb-6 italic">You have been amazing, thank you for making this such an easy process!</p>
            <p className="text-lg font-semibold">Bianca, NYC</p>
          </div>
        </div>
      </div>

      {/* Value Proposition Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <i className="fas fa-truck text-5xl text-[#ff6b6b] mb-4"></i>
              <h3 className="text-2xl font-bold mb-2">SAME DAY DELIVERY IN NYC</h3>
              <p className="text-gray-600">Get your balloons delivered the same day you order them.</p>
            </div>
            <div className="text-center">
              <i className="fas fa-gift text-5xl text-[#4ecdc4] mb-4"></i>
              <h3 className="text-2xl font-bold mb-2">CURATED ASSORTMENTS</h3>
              <p className="text-gray-600">Our team selects the perfect balloons for every occasion.</p>
            </div>
            <div className="text-center">
              <i className="fas fa-headset text-5xl text-[#45b7d1] mb-4"></i>
              <h3 className="text-2xl font-bold mb-2">WORLD-CLASS SUPPORT</h3>
              <p className="text-gray-600">Our friendly team is here to help with every order.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media CTA */}
      <div className="bg-purple-600 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <p className="text-4xl md:text-5xl font-bold">@GETGIGSY</p>
        </div>
      </div>
    </>
  )
}

