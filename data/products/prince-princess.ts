import { Product } from "../products";

const createPrincePrincessProducts = () => {
  const products = [];
  for (let i = 1; i <= 34; i++) {
    products.push({
      id: `prince-princess-${i}`,
      name: "Prince & Princess Balloon",
      slug: "prince-princess-details",
      price: 12.0,
      description: "Perfect for prince & princess",
      images: [`/images/products/prince-princess/prince-princess-${i.toString().padStart(2, "0")}.webp`],
      category: {
        type: "theme",
        theme: "prince-princess",
      },
      inStock: true,
      stock: 100,
      sku: `PRINCE_PRINCESS_${i.toString().padStart(3, "0")}`,
      tags: ["prince-princess", "balloon"],
    });
  }
  return products;
};

export const princeprincessProducts: Product[] = createPrincePrincessProducts();

export const getPrincePrincessProducts = (): Product[] => {
  return princeprincessProducts;
};
