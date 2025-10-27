import Link from 'next/link'
import { getFeaturedCategories } from '@/data/categories'

const FeaturedCategories = () => {
    const featuredCategories = getFeaturedCategories()

    return (
        <section className="py-20 px-4 bg-white">
            <div className="container mx-auto max-w-7xl">
                {/* Title */}
                <h2 className="text-center text-4xl md:text-5xl font-serif text-[#2c2c2c] mb-16 tracking-wide">
                    FEATURED COLLECTIONS
                </h2>

                {/* Categories Grid - Single row */}
                <div className="flex flex-row flex-wrap justify-center items-start gap-8 md:gap-12 lg:gap-16">
                    {featuredCategories.map((category) => (
                        <Link
                            key={category.slug}
                            href={`/categories/${category.slug}`}
                            className="group flex flex-col items-center max-w-[180px]"
                        >
                            {/* Circular Image Container */}
                            <div className="relative w-36 h-36 mb-5 rounded-full overflow-hidden bg-white border border-gray-100 shadow-sm group-hover:shadow-md transition-all duration-300">
                                {/* Placeholder for category image with balloon-like design */}
                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50">
                                    {/* Balloon shape using CSS */}
                                    <div className="w-20 h-24 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full relative flex items-center justify-center">
                                        <div className="w-8 h-8 bg-white/30 rounded-full absolute top-2 left-2"></div>
                                        <div className="w-4 h-4 bg-white/40 rounded-full absolute top-6 left-1"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Text Label */}
                            <p className="text-xs md:text-sm font-serif text-[#2c2c2c] text-center uppercase tracking-[0.05em] leading-tight break-words">
                                {category.name}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedCategories
