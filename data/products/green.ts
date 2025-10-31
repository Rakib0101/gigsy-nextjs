import { Product } from "../products";

const createGreenBalloons = () => {
  const balloons = [];
  for (let i = 1; i <= 14; i++) {
    balloons.push({
      id: `green-${i}`,
      name: "Green Balloon",
      slug: "color-balloons-details",
      price: 10.0,
      description: "14 Colors",
      images: [
        `/images/products/green/green-${i.toString().padStart(2, "0")}.webp`,
      ],
      category: {
        type: "color-balloons",
        color: "green",
      },
      inStock: true,
      stock: 100,
      sku: `GREEN-${i.toString().padStart(3, "0")}`,
      tags: ["green", "balloon"],
    });
  }
  return balloons;
};

export const greenBalloons: Product[] = createGreenBalloons();

export const getGreenBalloons = (): Product[] => {
  return greenBalloons;
};
