import { Product } from "../products";

const createHeartProducts = () => {
  const products = [];
  for (let i = 1; i <= 156; i++) {
    products.push({
      id: `heart-${i}`,
      name: "Heart Balloon",
      slug: "heart-details",
      price: 12.0,
      description: "Perfect for heart",
      images: [
        `/images/products/hearts/heart-${i.toString().padStart(2, "0")}.webp`,
      ],
      category: {
        type: "shape",
        shape: "heart",
      },
      inStock: true,
      stock: 100,
      sku: `HEART_${i.toString().padStart(3, "0")}`,
      tags: ["heart", "balloon"],
    });
  }
  return products;
};

export const heartProducts: Product[] = createHeartProducts();

export const getHeartProducts = (): Product[] => {
  return heartProducts;
};
