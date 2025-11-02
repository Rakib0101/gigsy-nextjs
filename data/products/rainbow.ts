import { Product } from "../products";

const createRainbowBalloons = () => {
  const balloons = [];
  for (let i = 1; i <= 6; i++) {
    balloons.push({
      id: `rainbow-${i}`,
      name: "Rainbow Balloon",
      slug: "rainbow-balloons-details",
      price: 10.0,
      description: "14 Colors",
      images: [
        `/images/products/rainbow/rainbow-${i
          .toString()
          .padStart(2, "0")}.webp`,
      ],
      category: {
        type: "color-balloons",
        color: "rainbow",
      },
      inStock: true,
      stock: 100,
      sku: `RAINBOW-${i.toString().padStart(3, "0")}`,
      tags: ["rainbow", "balloon"],
    });
  }
  return balloons;
};

export const rainbowBalloons: Product[] = createRainbowBalloons();

export const getRainbowBalloons = (): Product[] => {
  return rainbowBalloons;
};
