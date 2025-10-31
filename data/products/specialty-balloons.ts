import { Product } from "../products";

const createSpecialtyBalloons = () => {
  const balloons = [];
  for (let i = 1; i <= 42; i++) {
    balloons.push({
      id: `specialty-balloon-${i}`,
      name: "Specialty Balloon",
      slug: "specialty-balloons-details",
      price: 22.0,
      description: "Unique specialty balloon design",
      images: [
        `/images/products/specialty-balloons/specialty-${i
          .toString()
          .padStart(2, "0")}.webp`,
      ],
      category: {
        type: "specialty-balloons",
      },
      inStock: true,
      stock: 100,
      sku: `SPECIALTY-${i.toString().padStart(3, "0")}`,
      tags: ["specialty", "balloon"],
    });
  }
  return balloons;
};

export const specialtyBalloons: Product[] = createSpecialtyBalloons();

export const getSpecialtyBalloons = (): Product[] => {
  return specialtyBalloons;
};
