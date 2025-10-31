import { Product } from "../products";

const createValentinesDayProducts = () => {
  const products = [];
  for (let i = 1; i <= 67; i++) {
    products.push({
      id: `valentines-day-${i}`,
      name: "Valentine's Day Balloon",
      slug: "valentines-day-details",
      price: 12.0,
      description: "Perfect for valentine's day",
      images: [`/images/products/valentines-day/valentines-day-${i.toString().padStart(2, "0")}.webp`],
      category: {
        type: "holiday",
        holiday: "valentines-day",
      },
      inStock: true,
      stock: 100,
      sku: `VALENTINES_DAY_${i.toString().padStart(3, "0")}`,
      tags: ["valentines-day", "balloon"],
    });
  }
  return products;
};

export const valentinesdayProducts: Product[] = createValentinesDayProducts();

export const getValentinesDayProducts = (): Product[] => {
  return valentinesdayProducts;
};
