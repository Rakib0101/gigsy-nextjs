export default function Hero() {
  return (
    <section className="relative h-[600px] md:h-screen bg-cover bg-center">
      <div className="absolute inset-0 bg-black/30">
        <video
          src="/videos/hero-bg.mp4"
          autoPlay
          muted
          loop
          className="object-cover w-full h-full"
        />
      </div>
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1
            className="text-3xl md:text-5xl font-bold mb-4 uppercase"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            BALLOON SHOPPING (FINALLY) <br className="hidden md:block" /> MADE
            EASY
          </h1>
          <button className="bg-[#3a3a3e] hover:bg-gray-800 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold transition">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
}
