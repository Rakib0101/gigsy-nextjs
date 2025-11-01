import { Product } from "../products";

const createLetterBalloons = () => {
  const balloons = [];
  // Add more variations
  for (let i = 1; i <= 3; i++) {
    balloons.push({
      id: `letter-balloon-variant-${i}`,
      name: `Letter Balloon Variant ${i}`,
      slug: "letter-balloons-details",
      price: 15.0,
      description: "Spell out names, messages, or words",
      images: [
        `/images/products/letter-balloons/letter-${i
          .toString()
          .padStart(2, "0")}.webp`,
      ],
      category: {
        type: "letter-balloons",
      },
      inStock: true,
      stock: 100,
      sku: `LETTER-VAR-${i.toString().padStart(3, "0")}`,
      tags: ["letter", "balloon"],
    });
  }
  return balloons;
};

export const letterBalloons: Product[] = createLetterBalloons();

export const getLetterBalloons = (): Product[] => {
  return letterBalloons;
};
