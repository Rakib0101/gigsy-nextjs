"use client";

import { searchProducts } from "@/data/products";
import { Product } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useMemo, Suspense } from "react";

// Generate suggestions based on query
const generateSuggestions = (query: string): string[] => {
  if (!query || query.length < 2) return [];
  
  const lowercaseQuery = query.toLowerCase();
  const suggestions: string[] = [];
  
  // Common search terms that start with or contain the query
  const commonTerms = [
    "tennis", "tennis balloon",
    "latex", "latex balloon",
    "foil", "foil balloon",
    "number", "number balloon",
    "letter", "letter balloon",
    "confetti", "confetti balloon",
    "birthday", "birthday balloon",
    "wedding", "wedding balloon",
    "round", "round balloon",
    "heart", "heart balloon",
    "star", "star balloon",
  ];
  
  commonTerms.forEach(term => {
    const termLower = term.toLowerCase();
    if (
      (termLower.startsWith(lowercaseQuery) || termLower.includes(lowercaseQuery)) &&
      !suggestions.includes(term)
    ) {
      suggestions.push(term);
    }
  });
  
  return suggestions.slice(0, 5); // Limit to 5 suggestions
};

// Highlight matching text - case insensitive
const highlightText = (text: string, query: string): React.ReactNode => {
  if (!query || query.length < 1) return text;
  
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);
  
  return (
    <>
      {parts.map((part, index) => 
        part.toLowerCase() === query.toLowerCase() ? (
          <span key={index} className="bg-yellow-300 px-1">{part}</span>
        ) : (
          part
        )
      )}
    </>
  );
};

function SearchContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [products, setProducts] = useState<Product[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Update URL when search query changes
  useEffect(() => {
    const query = searchQuery.trim();
    if (query) {
      const params = new URLSearchParams();
      params.set("q", query);
      router.replace(`/search?${params.toString()}`, { scroll: false });
      
      // Search products
      const results = searchProducts(query);
      setProducts(results.slice(0, 3)); // Show first 3 products
      
      // Generate suggestions
      const newSuggestions = generateSuggestions(query);
      setSuggestions(newSuggestions);
    } else {
      router.replace("/search", { scroll: false });
      setProducts([]);
      setSuggestions([]);
    }
  }, [searchQuery, router]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already handled by useEffect
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
  };

  const handleClose = () => {
    router.push("/");
  };

  // Get all search results for "VIEW ALL RESULTS"
  const allResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return searchProducts(searchQuery.trim());
  }, [searchQuery]);

  // Prevent body scroll when search page is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-white z-[10001] overflow-y-auto flex flex-col">
      {/* Top Section - Search Input */}
      <div className="border-b border-gray-200 py-6 px-4 flex-shrink-0">
        <div className="container mx-auto max-w-7xl flex items-center gap-4">
          <form onSubmit={handleSearch} className="flex-1 flex items-center gap-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="flex-1 text-lg border-none outline-none focus:outline-none bg-transparent"
              autoFocus
            />
            <button
              type="submit"
              className="text-gray-600 hover:text-gray-900 transition flex-shrink-0"
              aria-label="Search"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                focusable="false"
                data-prefix="fat"
                data-icon="magnifying-glass"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M400 208A192 192 0 1 0 16 208a192 192 0 1 0 384 0zM349.3 360.6C312.2 395 262.6 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 54.6-21 104.2-55.4 141.3l149 149c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-149-149z"
                />
              </svg>
            </button>
          </form>
          <button
            onClick={handleClose}
            className="text-gray-600 hover:text-gray-900 transition uppercase font-semibold tracking-wide flex-shrink-0"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            CLOSE
          </button>
        </div>
      </div>

      {/* Middle Section - Two Columns */}
      <div className="container mx-auto max-w-7xl px-4 py-8 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Suggestions */}
          <div>
            {(suggestions.length > 0 || searchQuery.length >= 2) && (
              <>
                <h3 className="text-base font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                  SUGGESTIONS
                </h3>
                {suggestions.length > 0 ? (
                  <div className="space-y-3">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="block w-full text-left text-base text-gray-700 hover:text-gray-900 transition py-1 uppercase"
                      >
                        {highlightText(suggestion, searchQuery)}
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm">No suggestions available</p>
                )}
              </>
            )}
          </div>

          {/* Right Column - Products */}
          <div>
            {products.length > 0 && (
              <>
                <h3 className="text-base font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                  PRODUCTS
                </h3>
                <div className="space-y-5">
                  {products.map((product) => (
                    <Link
                      key={product.id}
                      href={`/${product.slug}`}
                      className="flex items-center gap-4 hover:bg-gray-50 p-2 rounded transition group"
                    >
                      {/* Product Image */}
                      <div className="relative w-20 h-20 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                        {product.images && product.images.length > 0 && product.images[0] ? (
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-400 text-xs">
                            No Image
                          </div>
                        )}
                      </div>
                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900 font-normal mb-1 leading-relaxed">
                          {product.name}
                        </p>
                        <p className="text-base font-semibold text-gray-900">
                          ${(product.salePrice || product.price).toFixed(2)}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Section - View All Results */}
      {allResults.length > products.length && (
        <div className="bg-[#80C9C4] py-4 px-4 flex-shrink-0">
          <div className="container mx-auto max-w-7xl flex justify-end">
            <Link
              href={`/search/results?q=${encodeURIComponent(searchQuery)}`}
              className="flex items-center gap-2 text-white hover:text-gray-100 transition uppercase font-semibold tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span>VIEW ALL RESULTS</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="fixed inset-0 bg-white z-[10001] flex items-center justify-center">
        <div className="text-gray-500">Loading search...</div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}
