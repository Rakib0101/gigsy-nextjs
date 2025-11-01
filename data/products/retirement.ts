import { Product } from "../products";

const createRetirementProducts = () => {
  const products = [];
  for (let i = 1; i <= 2; i++) {
    products.push({
      id: `retirement-${i}`,
      name: "Retirement Balloon",
      slug: "retirement-details",
      price: 12.0,
      description: "Perfect for retirement",
      images: [
        `/images/products/retirement/retirement-${i
          .toString()
          .padStart(2, "0")}.webp`,
      ],
      category: {
        type: "occasion",
        occasion: "retirement",
      },
      inStock: true,
      stock: 100,
      sku: `RETIREMENT_${i.toString().padStart(3, "0")}`,
      tags: ["retirement", "balloon"],
    });
  }
  return products;
};

export const retirementProducts: Product[] = createRetirementProducts();

export const getRetirementProducts = (): Product[] => {
  return retirementProducts;
};
