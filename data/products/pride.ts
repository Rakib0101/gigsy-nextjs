import { Product } from "../products";

const createPrideProducts = () => {
  const products = [];
  for (let i = 1; i <= 34; i++) {
    products.push({
      id: `pride-${i}`,
      name: "Pride Balloon",
      slug: "pride-details",
      price: 12.0,
      description: "Perfect for pride",
      images: [`/images/products/pride/pride-${i.toString().padStart(2, "0")}.webp`],
      category: {
        type: "holiday",
        holiday: "pride",
      },
      inStock: true,
      stock: 100,
      sku: `PRIDE_${i.toString().padStart(3, "0")}`,
      tags: ["pride", "balloon"],
    });
  }
  return products;
};

export const prideProducts: Product[] = createPrideProducts();

export const getPrideProducts = (): Product[] => {
  return prideProducts;
};
