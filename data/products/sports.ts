import { Product } from "../products";

const createSportsProducts = () => {
  const products = [];
  for (let i = 1; i <= 14; i++) {
    products.push({
      id: `sports-${i}`,
      name: "Sports Balloon",
      slug: "sports-details",
      price: 12.0,
      description: "Perfect for sports",
      images: [
        `/images/products/sports/sports-${i.toString().padStart(2, "0")}.webp`,
      ],
      category: {
        type: "theme",
        theme: "sports",
      },
      inStock: true,
      stock: 100,
      sku: `SPORTS_${i.toString().padStart(3, "0")}`,
      tags: ["sports", "balloon"],
    });
  }
  return products;
};

export const sportsProducts: Product[] = createSportsProducts();

export const getSportsProducts = (): Product[] => {
  return sportsProducts;
};
