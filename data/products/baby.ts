import { Product } from "../products";

const createBabyProducts = () => {
  const products = [];
  for (let i = 1; i <= 43; i++) {
    products.push({
      id: `baby-${i}`,
      name: "Baby Balloon",
      slug: "baby-details",
      price: 12.0,
      description: "Perfect for baby",
      images: [`/images/products/baby/baby-${i.toString().padStart(2, "0")}.webp`],
      category: {
        type: "occasion",
        occasion: "baby",
      },
      inStock: true,
      stock: 100,
      sku: `BABY_${i.toString().padStart(3, "0")}`,
      tags: ["baby", "balloon"],
    });
  }
  return products;
};

export const babyProducts: Product[] = createBabyProducts();

export const getBabyProducts = (): Product[] => {
  return babyProducts;
};
