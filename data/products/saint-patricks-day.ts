import { Product } from "../products";

const createSaintPatricksDayProducts = () => {
  const products = [];
  for (let i = 1; i <= 28; i++) {
    products.push({
      id: `saint-patricks-day-${i}`,
      name: "Saint Patrick's Day Balloon",
      slug: "saint-patricks-day-details",
      price: 12.0,
      description: "Perfect for saint patrick's day",
      images: [`/images/products/saint-patricks-day/saint-patricks-day-${i.toString().padStart(2, "0")}.webp`],
      category: {
        type: "holiday",
        holiday: "saint-patricks-day",
      },
      inStock: true,
      stock: 100,
      sku: `SAINT_PATRICKS_DAY_${i.toString().padStart(3, "0")}`,
      tags: ["saint-patricks-day", "balloon"],
    });
  }
  return products;
};

export const saintpatricksdayProducts: Product[] = createSaintPatricksDayProducts();

export const getSaintPatricksDayProducts = (): Product[] => {
  return saintpatricksdayProducts;
};
