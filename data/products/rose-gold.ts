import { Product } from "../products";

const createRoseGoldBalloons = () => {
  const balloons = [];
  for (let i = 1; i <= 14; i++) {
    balloons.push({
      id: `rose-gold-${i}`,
      name: "Rose Gold Balloon",
      slug: "color-balloons-details",
      price: 10.0,
      description: "14 Colors",
      images: [
        `/images/products/rose-gold/rose-gold-${i
          .toString()
          .padStart(2, "0")}.webp`,
      ],
      category: {
        type: "color-balloons",
        color: "rose-gold",
      },
      inStock: true,
      stock: 100,
      sku: `ROSE-GOLD-${i.toString().padStart(3, "0")}`,
      tags: ["rose-gold", "balloon"],
    });
  }
  return balloons;
};

export const roseGoldBalloons: Product[] = createRoseGoldBalloons();

export const getRoseGoldBalloons = (): Product[] => {
  return roseGoldBalloons;
};
