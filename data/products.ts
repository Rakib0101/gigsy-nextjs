// Product data structure for the store
import { getAllProducts as getAllProductsFromHelpers } from "./product-helpers";

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  salePrice?: number;
  description: string;
  images: string[];
  category: {
    type?: string;
    occasion?: string;
    color?: string;
    shape?: string;
    holiday?: string;
    theme?: string;
  };
  inStock: boolean;
  stock?: number;
  sku: string;
  tags: string[];
  featured?: boolean;
  rating?: number;
  reviews?: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Giant Pink Confetti Balloon',
    slug: 'giant-pink-confetti-balloon',
    price: 24.99,
    salePrice: 19.99,
    description: 'A stunning giant pink balloon filled with confetti - perfect for any celebration!',
    images: ['/images/products/giant-pink-confetti.jpg'],
    category: {
      type: 'specialty-balloons',
      color: 'pink',
      shape: 'round'
    },
    inStock: true,
    stock: 45,
    sku: 'BLN-PNK-CNT-001',
    tags: ['party', 'celebration', 'confetti'],
    featured: true,
    rating: 4.8,
    reviews: 152
  },
  {
    id: '2',
    name: 'Gold Number 30 Balloon',
    slug: 'gold-number-30-balloon',
    price: 18.99,
    description: 'Elegant gold foil number balloon perfect for milestone birthdays!',
    images: ['/images/products/gold-number-30.jpg'],
    category: {
      type: 'number-balloons',
      color: 'gold',
      occasion: 'adult-birthday'
    },
    inStock: true,
    stock: 78,
    sku: 'BLN-GLD-30-001',
    tags: ['birthday', 'milestone', 'gold'],
    featured: true,
    rating: 4.9,
    reviews: 203
  },
  {
    id: '3',
    name: 'Rainbow Heart Orbz Balloon',
    slug: 'rainbow-heart-orbz-balloon',
    price: 22.99,
    description: 'Beautiful rainbow heart Orbz balloon that adds a pop of color to any celebration!',
    images: ['/images/products/rainbow-heart-orbz.jpg'],
    category: {
      type: 'orbz-balloons',
      color: 'rainbow',
      shape: 'heart',
      theme: 'rainbows'
    },
    inStock: true,
    stock: 56,
    sku: 'BLN-RBW-HRT-001',
    tags: ['rainbow', 'heart', 'colorful', 'pride'],
    featured: false,
    rating: 4.7,
    reviews: 89
  },
  {
    id: '4',
    name: 'Blue Star Latex Balloon Set',
    slug: 'blue-star-latex-balloon-set',
    price: 12.99,
    description: 'Set of 5 blue star-shaped latex balloons perfect for party decorations!',
    images: ['/images/products/blue-star-latex-set.jpg'],
    category: {
      type: 'latex-balloons',
      color: 'blue',
      shape: 'star'
    },
    inStock: true,
    stock: 120,
    sku: 'BLN-BLU-STAR-001',
    tags: ['star', 'blue', 'party-decorations'],
    featured: false,
    rating: 4.6,
    reviews: 234
  },
  {
    id: '5',
    name: 'Red Christmas Ornament Balloon',
    slug: 'red-christmas-ornament-balloon',
    price: 19.99,
    description: 'Festive red Christmas ornament balloon to celebrate the holidays!',
    images: ['/images/products/red-christmas-ornament.jpg'],
    category: {
      type: 'foil-shapes',
      color: 'red',
      holiday: 'christmas'
    },
    inStock: true,
    stock: 45,
    sku: 'BLN-RED-XMAS-001',
    tags: ['christmas', 'holiday', 'ornament'],
    featured: true,
    rating: 4.9,
    reviews: 178
  },
  {
    id: '6',
    name: 'Letter H Gold Foil Balloon',
    slug: 'letter-h-gold-foil-balloon',
    price: 15.99,
    description: 'Gold foil letter H balloon - spell out names, messages, or words!',
    images: ['/images/products/letter-h-gold.jpg'],
    category: {
      type: 'letter-balloons',
      color: 'gold'
    },
    inStock: true,
    stock: 89,
    sku: 'BLN-GLD-LET-H-001',
    tags: ['letter', 'gold', 'customizable'],
    featured: false,
    rating: 4.8,
    reviews: 312
  },
  {
    id: '7',
    name: 'Pink Unicorn Theme Balloon',
    slug: 'pink-unicorn-theme-balloon',
    price: 21.99,
    description: 'Magical pink unicorn themed balloon for the perfect magical celebration!',
    images: ['/images/products/pink-unicorn.jpg'],
    category: {
      type: 'specialty-balloons',
      color: 'pink',
      theme: 'unicorn',
      occasion: 'girl-birthday'
    },
    inStock: true,
    stock: 67,
    sku: 'BLN-PNK-UNI-001',
    tags: ['unicorn', 'magical', 'birthday', 'girls'],
    featured: true,
    rating: 4.9,
    reviews: 445
  },
  {
    id: '8',
    name: 'Purple Birthday Cake Balloon',
    slug: 'purple-birthday-cake-balloon',
    price: 17.99,
    description: 'Delightful purple birthday cake balloon to make any birthday extra special!',
    images: ['/images/products/purple-birthday-cake.jpg'],
    category: {
      type: 'foil-shapes',
      color: 'purple',
      theme: 'birthday-cakes',
      occasion: 'celebration'
    },
    inStock: true,
    stock: 98,
    sku: 'BLN-PUR-CAKE-001',
    tags: ['birthday', 'cake', 'celebration'],
    featured: false,
    rating: 4.7,
    reviews: 156
  },
  {
    id: '9',
    name: 'Black Halloween Jack-o-Lantern Balloon',
    slug: 'black-halloween-jack-o-lantern-balloon',
    price: 20.99,
    description: 'Spooky black Halloween jack-o-lantern balloon for your Halloween celebration!',
    images: ['/images/products/halloween-jack-o-lantern.jpg'],
    category: {
      type: 'foil-shapes',
      color: 'black',
      holiday: 'halloween',
      theme: 'classic-themes'
    },
    inStock: true,
    stock: 34,
    sku: 'BLN-BLK-HLW-001',
    tags: ['halloween', 'jack-o-lantern', 'spooky'],
    featured: true,
    rating: 4.8,
    reviews: 89
  },
  {
    id: '10',
    name: 'Mermaid Tail Gradient Balloon',
    slug: 'mermaid-tail-gradient-balloon',
    price: 23.99,
    description: 'Stunning mermaid tail gradient balloon in aqua and purple tones!',
    images: ['/images/products/mermaid-tail.jpg'],
    category: {
      type: 'specialty-balloons',
      theme: 'mermaid',
      occasion: 'celebration'
    },
    inStock: true,
    stock: 52,
    sku: 'BLN-MRD-TL-001',
    tags: ['mermaid', 'gradient', 'aquatic'],
    featured: true,
    rating: 4.9,
    reviews: 267
  }
];

// Helper functions
export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

export const getProductsByCategory = (categoryType: string, categorySlug: string): Product[] => {
  return products.filter(product => {
    const category = product.category as any;
    return category[categoryType] === categorySlug;
  });
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const searchProducts = (query: string): Product[] => {
  // Get all products from all categories to search
  const allProducts = getAllProductsFromHelpers();
  
  const lowercaseQuery = query.toLowerCase();
  return allProducts.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    (product.tags && product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)))
  );
};

export const getProductsByPriceRange = (min: number, max: number): Product[] => {
  return products.filter(product => {
    const price = product.salePrice || product.price;
    return price >= min && price <= max;
  });
};

