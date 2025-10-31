import { Product } from "../products";

const createEasterProducts = () => {
  const products = [];
  for (let i = 1; i <= 43; i++) {
    products.push({
      id: `easter-${i}`,
      name: "Easter Balloon",
      slug: "easter-details",
      price: 12.0,
      description: "Perfect for easter",
      images: [`/images/products/easter/easter-${i.toString().padStart(2, "0")}.webp`],
      category: {
        type: "holiday",
        holiday: "easter",
      },
      inStock: true,
      stock: 100,
      sku: `EASTER_${i.toString().padStart(3, "0")}`,
      tags: ["easter", "balloon"],
    });
  }
  return products;
};

export const easterProducts: Product[] = createEasterProducts();

export const getEasterProducts = (): Product[] => {
  return easterProducts;
};
