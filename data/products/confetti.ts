import { Product } from "../products";

const createConfettiBalloons = () => {
  const balloons = [];
  for (let i = 1; i <= 14; i++) {
    balloons.push({
      id: `confetti-${i}`,
      name: "Confetti Balloon",
      slug: "color-balloons-details",
      price: 10.0,
      description: "14 Colors",
      images: [
        `/images/products/confetti/confetti-${i
          .toString()
          .padStart(2, "0")}.webp`,
      ],
      category: {
        type: "color-balloons",
        color: "confetti",
      },
      inStock: true,
      stock: 100,
      sku: `CONFETTI-${i.toString().padStart(3, "0")}`,
      tags: ["confetti", "balloon"],
    });
  }
  return balloons;
};

export const confettiBalloons: Product[] = createConfettiBalloons();

export const getConfettiBalloons = (): Product[] => {
  return confettiBalloons;
};
