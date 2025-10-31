import { Product } from "../products";

const createNumberBalloons = () => {
  const balloons = [];
  for (let i = 1; i <= 45; i++) {
    balloons.push({
      id: `number-balloon-${i}`,
      name: "Number Balloon",
      slug: "number-balloons-details",
      price: 15.0,
      description: "Perfect for milestone birthdays and celebrations",
      images: [
        `/images/products/number-balloons/number-${i
          .toString()
          .padStart(2, "0")}.webp`,
      ],
      category: {
        type: "number-balloons",
      },
      inStock: true,
      stock: 100,
      sku: `NUMBER-${i.toString().padStart(3, "0")}`,
      tags: ["number", "balloon", "birthday"],
    });
  }
  return balloons;
};

export const numberBalloons: Product[] = createNumberBalloons();

export const getNumberBalloons = (): Product[] => {
  return numberBalloons;
};
