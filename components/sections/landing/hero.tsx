export default function Hero() {
  return (
    <section className="relative h-[600px] md:h-[800px] bg-cover bg-center">
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
    </section>
  )
}