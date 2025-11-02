import { Product } from "../products";

const createPinkBalloons = () => {
  const balloons = [];
  for (let i = 1; i <= 8; i++) {
    balloons.push({
      id: `pink-${i}`,
      name: "Pink Balloon",
      slug: "pink-balloons-details",
      price: 10.0,
      description: "14 Colors",
      images: [
        `/images/products/pink/pink-${i.toString().padStart(2, "0")}.webp`,
      ],
      category: {
        type: "color-balloons",
        color: "pink",
      },
      inStock: true,
      stock: 100,
      sku: `PINK-${i.toString().padStart(3, "0")}`,
      tags: ["pink", "balloon"],
    });
  }
  return balloons;
};

export const pinkBalloons: Product[] = createPinkBalloons();

export const getPinkBalloons = (): Product[] => {
  return pinkBalloons;
};
