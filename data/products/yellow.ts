import { Product } from "../products";

const createYellowBalloons = () => {
  const balloons = [];
  for (let i = 1; i <= 12; i++) {
    balloons.push({
      id: `yellow-${i}`,
      name: "Yellow Balloon",
      slug: "yellow-balloons-details",
      price: 10.0,
      description: "14 Colors",
      images: [
        `/images/products/yellow/yellow-${i.toString().padStart(2, "0")}.webp`,
      ],
      category: {
        type: "color-balloons",
        color: "yellow",
      },
      inStock: true,
      stock: 100,
      sku: `YELLOW-${i.toString().padStart(3, "0")}`,
      tags: ["yellow", "balloon"],
    });
  }
  return balloons;
};

export const yellowBalloons: Product[] = createYellowBalloons();

export const getYellowBalloons = (): Product[] => {
  return yellowBalloons;
};
