import { Product } from "../products";

const createSuperBowlProducts = () => {
  const products = [];
  for (let i = 1; i <= 7; i++) {
    products.push({
      id: `super-bowl-${i}`,
      name: "Super Bowl Balloon",
      slug: "super-bowl-details",
      price: 12.0,
      description: "Perfect for super bowl",
      images: [
        `/images/products/super-bowl/super-bowl-${i
          .toString()
          .padStart(2, "0")}.webp`,
      ],
      category: {
        type: "holiday",
        holiday: "super-bowl",
      },
      inStock: true,
      stock: 100,
      sku: `SUPER_BOWL_${i.toString().padStart(3, "0")}`,
      tags: ["super-bowl", "balloon"],
    });
  }
  return products;
};

export const superbowlProducts: Product[] = createSuperBowlProducts();

export const getSuperBowlProducts = (): Product[] => {
  return superbowlProducts;
};
