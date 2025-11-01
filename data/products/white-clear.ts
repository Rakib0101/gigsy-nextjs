import { Product } from "../products";

const createWhiteClearBalloons = () => {
  const balloons = [];
  for (let i = 1; i <= 11; i++) {
    balloons.push({
      id: `white-clear-${i}`,
      name: "White & Clear Balloon",
      slug: "color-balloons-details",
      price: 10.0,
      description: "14 Colors",
      images: [
        `/images/products/white-clear/white-clear-${i
          .toString()
          .padStart(2, "0")}.webp`,
      ],
      category: {
        type: "color-balloons",
        color: "white-clear",
      },
      inStock: true,
      stock: 100,
      sku: `WHITE-CLEAR-${i.toString().padStart(3, "0")}`,
      tags: ["white", "clear", "balloon"],
    });
  }
  return balloons;
};

export const whiteClearBalloons: Product[] = createWhiteClearBalloons();

export const getWhiteClearBalloons = (): Product[] => {
  return whiteClearBalloons;
};
