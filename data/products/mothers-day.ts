import { Product } from "../products";

const createMothersDayProducts = () => {
  const products = [];
  for (let i = 1; i <= 56; i++) {
    products.push({
      id: `mothers-day-${i}`,
      name: "Mother's Day Balloon",
      slug: "mothers-day-details",
      price: 12.0,
      description: "Perfect for mother's day",
      images: [`/images/products/mothers-day/mothers-day-${i.toString().padStart(2, "0")}.webp`],
      category: {
        type: "holiday",
        holiday: "mothers-day",
      },
      inStock: true,
      stock: 100,
      sku: `MOTHERS_DAY_${i.toString().padStart(3, "0")}`,
      tags: ["mothers-day", "balloon"],
    });
  }
  return products;
};

export const mothersdayProducts: Product[] = createMothersDayProducts();

export const getMothersDayProducts = (): Product[] => {
  return mothersdayProducts;
};
