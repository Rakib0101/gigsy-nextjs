import { Product } from "../products";

const createRoundProducts = () => {
  const products = [];
  for (let i = 1; i <= 15; i++) {
    products.push({
      id: `round-${i}`,
      name: "Round Balloon",
      slug: "round-details",
      price: 12.0,
      description: "Perfect for round",
      images: [
        `/images/products/rounds/round-${i.toString().padStart(2, "0")}.webp`,
      ],
      category: {
        type: "shape",
        shape: "round",
      },
      inStock: true,
      stock: 100,
      sku: `ROUND_${i.toString().padStart(3, "0")}`,
      tags: ["round", "balloon"],
    });
  }
  return products;
};

export const roundProducts: Product[] = createRoundProducts();

export const getRoundProducts = (): Product[] => {
  return roundProducts;
};
