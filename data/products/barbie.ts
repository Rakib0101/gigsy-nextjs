import { Product } from "../products";

const createBarbieProducts = () => {
  const products = [];
  for (let i = 1; i <= 38; i++) {
    products.push({
      id: `barbie-${i}`,
      name: "Barbie Balloon",
      slug: "barbie-details",
      price: 12.0,
      description: "Perfect for barbie",
      images: [`/images/products/barbie/barbie-${i.toString().padStart(2, "0")}.webp`],
      category: {
        type: "theme",
        theme: "barbie",
      },
      inStock: true,
      stock: 100,
      sku: `BARBIE_${i.toString().padStart(3, "0")}`,
      tags: ["barbie", "balloon"],
    });
  }
  return products;
};

export const barbieProducts: Product[] = createBarbieProducts();

export const getBarbieProducts = (): Product[] => {
  return barbieProducts;
};
