import { Product } from "../products";

const createLetterBalloons = () => {
  const balloons = [];
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  letters.forEach((letter, index) => {
    balloons.push({
      id: `letter-balloon-${letter.toLowerCase()}`,
      name: `Letter ${letter} Balloon`,
      slug: "letter-balloons-details",
      price: 15.0,
      description: "Spell out names, messages, or words",
      images: [
        `/images/products/letter-balloons/letter-${letter.toLowerCase()}.webp`,
      ],
      category: {
        type: "letter-balloons",
      },
      inStock: true,
      stock: 100,
      sku: `LETTER-${letter}-001`,
      tags: ["letter", "balloon", letter.toLowerCase()],
    });
  });
  // Add more variations
  for (let i = 1; i <= 26; i++) {
    balloons.push({
      id: `letter-balloon-variant-${i}`,
      name: `Letter Balloon Variant ${i}`,
      slug: "letter-balloons-details",
      price: 15.0,
      description: "Spell out names, messages, or words",
      images: [
        `/images/products/letter-balloons/variant-${i
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
