import { Product } from "../products";

const createHalloweenProducts = () => {
  const products = [];
  for (let i = 1; i <= 45; i++) {
    products.push({
      id: `halloween-${i}`,
      name: "Halloween Balloon",
      slug: "halloween-details",
      price: 12.0,
      description: "Perfect for halloween",
      images: [`/images/products/halloween/halloween-${i.toString().padStart(2, "0")}.webp`],
      category: {
        type: "holiday",
        holiday: "halloween",
      },
      inStock: true,
      stock: 100,
      sku: `HALLOWEEN_${i.toString().padStart(3, "0")}`,
      tags: ["halloween", "balloon"],
    });
  }
  return products;
};

export const halloweenProducts: Product[] = createHalloweenProducts();

export const getHalloweenProducts = (): Product[] => {
  return halloweenProducts;
};
