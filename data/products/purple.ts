import { Product } from "../products";

const createPurpleBalloons = () => {
  const balloons = [];
  for (let i = 1; i <= 14; i++) {
    balloons.push({
      id: `purple-${i}`,
      name: "Purple Balloon",
      slug: "purple-balloons-details",
      price: 10.0,
      description: "14 Colors",
      images: [
        `/images/products/purple/purple-${i.toString().padStart(2, "0")}.webp`,
      ],
      category: {
        type: "color-balloons",
        color: "purple",
      },
      inStock: true,
      stock: 100,
      sku: `PURPLE-${i.toString().padStart(3, "0")}`,
      tags: ["purple", "balloon"],
    });
  }
  return balloons;
};

export const purpleBalloons: Product[] = createPurpleBalloons();

export const getPurpleBalloons = (): Product[] => {
  return purpleBalloons;
};
