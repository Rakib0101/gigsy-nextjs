import { Product } from "../products";

const createCelebrationProducts = () => {
  const products = [];
  for (let i = 1; i <= 89; i++) {
    products.push({
      id: `celebration-${i}`,
      name: "Celebration Balloon",
      slug: "celebration-details",
      price: 12.0,
      description: "Perfect for celebration",
      images: [
        `/images/products/celebration/celebration-${i
          .toString()
          .padStart(2, "0")}.webp`,
      ],
      category: {
        type: "occasion",
        occasion: "celebration",
      },
      inStock: true,
      stock: 100,
      sku: `CELEBRATION_${i.toString().padStart(3, "0")}`,
      tags: ["celebration", "balloon"],
    });
  }
  return products;
};

export const celebrationProducts: Product[] = createCelebrationProducts();

export const getCelebrationProducts = (): Product[] => {
  return celebrationProducts;
};
