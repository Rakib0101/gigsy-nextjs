import { Product } from "../products";

const createMetallicBalloons = () => {
  const balloons = [];
  for (let i = 1; i <= 18; i++) {
    balloons.push({
      id: `metallic-${i}`,
      name: "Metallic Balloon",
      slug: "metallic-balloons-details",
      price: 10.0,
      description: "14 Colors",
      images: [
        `/images/products/metallic/metallic-${i
          .toString()
          .padStart(2, "0")}.webp`,
      ],
      category: {
        type: "color-balloons",
        color: "metallic",
      },
      inStock: true,
      stock: 100,
      sku: `METALLIC-${i.toString().padStart(3, "0")}`,
      tags: ["metallic", "balloon"],
    });
  }
  return balloons;
};

export const metallicBalloons: Product[] = createMetallicBalloons();

export const getMetallicBalloons = (): Product[] => {
  return metallicBalloons;
};
