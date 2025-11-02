import { Product } from "../products";

const createIvoryNeutralsBalloons = () => {
  const balloons = [];
  for (let i = 1; i <= 14; i++) {
    balloons.push({
      id: `ivory-neutrals-${i}`,
      name: "Ivory & Neutrals Balloon",
      slug: "ivory-neutrals-balloons-details",
      price: 10.0,
      description: "14 Colors",
      images: [
        `/images/products/ivory/ivory-${i.toString().padStart(2, "0")}.webp`,
      ],
      category: {
        type: "color-balloons",
        color: "ivory-neutrals",
      },
      inStock: true,
      stock: 100,
      sku: `IVORY-NEUTRALS-${i.toString().padStart(3, "0")}`,
      tags: ["ivory", "neutrals", "balloon"],
    });
  }
  return balloons;
};

export const ivoryNeutralsBalloons: Product[] = createIvoryNeutralsBalloons();

export const getIvoryNeutralsBalloons = (): Product[] => {
  return ivoryNeutralsBalloons;
};
