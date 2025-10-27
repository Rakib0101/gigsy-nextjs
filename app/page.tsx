import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[600px] md:h-[800px] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30">
          <video src="/videos/hero-bg.mp4" autoPlay muted loop className="object-cover w-full h-full" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
              BALLOON SHOPPING
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
              (FINALLY) MADE EASY
            </h2>
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold transition">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      {/* Balloons Are Fun Section */}
      <div className="bg-gray-800 text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <p className="text-2xl md:text-3xl mb-12">BALLOONS ARE FUN. SHOPPING FOR THEM SHOULD BE. TOO.</p>
          <div className="flex justify-center gap-8">
            <span className="text-4xl font-bold text-green-400">JIGSY</span>
            <span className="text-4xl font-bold text-green-400">JIGSY</span>
            <span className="text-4xl font-bold text-green-400">JIGSY</span>
          </div>
        </div>
      </div>

      {/* Featured Collections Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">FEATURED COLLECTIONS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Adult Birthday', icon: 'fa-birthday-cake', color: 'from-pink-400 to-pink-600' },
              { name: 'Kids Birthday', icon: 'fa-cake', color: 'from-yellow-400 to-yellow-600' },
              { name: 'Wedding & Engagement', icon: 'fa-heart', color: 'from-red-400 to-red-600' },
              { name: 'Anniversary', icon: 'fa-ring', color: 'from-purple-400 to-purple-600' },
              { name: 'Baby', icon: 'fa-baby', color: 'from-blue-400 to-blue-600' },
              { name: 'Graduation', icon: 'fa-graduation-cap', color: 'from-indigo-400 to-indigo-600' },
              { name: 'Celebration', icon: 'fa-champagne-glasses', color: 'from-teal-400 to-teal-600' },
              { name: 'Holiday', icon: 'fa-calendar', color: 'from-green-400 to-green-600' },
            ].map((category, index) => (
              <Link key={index} href="#" className="text-center group">
                <div className={`w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition`}>
                  <i className={`fas ${category.icon} text-4xl md:text-5xl text-white`}></i>
                </div>
                <p className="text-sm md:text-base font-semibold">{category.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

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

