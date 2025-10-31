import { Product } from "../products";

const createFathersDayProducts = () => {
  const products = [];
  for (let i = 1; i <= 42; i++) {
    products.push({
      id: `fathers-day-${i}`,
      name: "Father's Day Balloon",
      slug: "fathers-day-details",
      price: 12.0,
      description: "Perfect for father's day",
      images: [`/images/products/fathers-day/fathers-day-${i.toString().padStart(2, "0")}.webp`],
      category: {
        type: "holiday",
        holiday: "fathers-day",
      },
      inStock: true,
      stock: 100,
      sku: `FATHERS_DAY_${i.toString().padStart(3, "0")}`,
      tags: ["fathers-day", "balloon"],
    });
  }
  return products;
};

export const fathersdayProducts: Product[] = createFathersDayProducts();

export const getFathersDayProducts = (): Product[] => {
  return fathersdayProducts;
};
