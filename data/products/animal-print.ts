import { Product } from "../products";

const createAnimalPrintBalloons = () => {
  const balloons = [];
  for (let i = 1; i <= 4; i++) {
    balloons.push({
      id: `animal-print-${i}`,
      name: "Animal Print Balloon",
      slug: "animal-print-balloons-details",
      price: 10.0,
      description: "14 Colors",
      images: [
        `/images/products/animal-print/animal-print-${i
          .toString()
          .padStart(2, "0")}.webp`,
      ],
      category: {
        type: "color-balloons",
        color: "animal-print",
      },
      inStock: true,
      stock: 100,
      sku: `ANIMAL-PRINT-${i.toString().padStart(3, "0")}`,
      tags: ["animal-print", "balloon"],
    });
  }
  return balloons;
};

export const animalPrintBalloons: Product[] = createAnimalPrintBalloons();

export const getAnimalPrintBalloons = (): Product[] => {
  return animalPrintBalloons;
};
