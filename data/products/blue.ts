import { Product } from "../products";

const createBlueBalloons = () => {
  const balloons = [];
  for (let i = 1; i <= 14; i++) {
    balloons.push({
      id: `blue-${i}`,
      name: "Blue Balloon",
      slug: "color-balloons-details",
      price: 10.0,
      description: "14 Colors",
      images: [
        `/images/products/blue/blue-${i.toString().padStart(2, "0")}.webp`,
      ],
      category: {
        type: "color-balloons",
        color: "blue",
      },
      inStock: true,
      stock: 100,
      sku: `BLUE-${i.toString().padStart(3, "0")}`,
      tags: ["blue", "balloon"],
    });
  }
  return balloons;
};

export const blueBalloons: Product[] = createBlueBalloons();

export const getBlueBalloons = (): Product[] => {
  return blueBalloons;
};
