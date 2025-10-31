import { Product } from "../products";

const createBlackBalloons = () => {
  const balloons = [];
  for (let i = 1; i <= 14; i++) {
    balloons.push({
      id: `black-${i}`,
      name: "Black Balloon",
      slug: "color-balloons-details",
      price: 10.0,
      description: "14 Colors",
      images: [
        `/images/products/black/black-${i.toString().padStart(2, "0")}.webp`,
      ],
      category: {
        type: "color-balloons",
        color: "black",
      },
      inStock: true,
      stock: 100,
      sku: `BLACK-${i.toString().padStart(3, "0")}`,
      tags: ["black", "balloon"],
    });
  }
  return balloons;
};

export const blackBalloons: Product[] = createBlackBalloons();

export const getBlackBalloons = (): Product[] => {
  return blackBalloons;
};
