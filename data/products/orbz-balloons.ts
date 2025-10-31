import { Product } from "../products";

const createOrbzBalloons = () => {
  const balloons = [];
  for (let i = 1; i <= 28; i++) {
    balloons.push({
      id: `orbz-balloon-${i}`,
      name: "Orbz Balloon",
      slug: "orbz-balloons-details",
      price: 20.0,
      description: "Unique Orbz balloon design",
      images: [
        `/images/products/orbz-balloons/orbz-${i
          .toString()
          .padStart(2, "0")}.webp`,
      ],
      category: {
        type: "orbz-balloons",
      },
      inStock: true,
      stock: 100,
      sku: `ORBZ-${i.toString().padStart(3, "0")}`,
      tags: ["orbz", "balloon"],
    });
  }
  return balloons;
};

export const orbzBalloons: Product[] = createOrbzBalloons();

export const getOrbzBalloons = (): Product[] => {
  return orbzBalloons;
};
