import { Product } from "../products";

const createGoldBalloons = () => {
  const balloons = [];
  for (let i = 1; i <= 18; i++) {
    balloons.push({
      id: `gold-${i}`,
      name: "Gold Balloon",
      slug: "color-balloons-details",
      price: 10.0,
      description: "14 Colors",
      images: [
        `/images/products/gold/gold-${i.toString().padStart(2, "0")}.webp`,
      ],
      category: {
        type: "color-balloons",
        color: "gold",
      },
      inStock: true,
      stock: 100,
      sku: `GOLD-${i.toString().padStart(3, "0")}`,
      tags: ["gold", "balloon"],
    });
  }
  return balloons;
};

export const goldBalloons: Product[] = createGoldBalloons();

export const getGoldBalloons = (): Product[] => {
  return goldBalloons;
};
