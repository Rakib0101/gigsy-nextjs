import { Product } from "../products";

const createSilverGreyBalloons = () => {
  const balloons = [];
  for (let i = 1; i <= 14; i++) {
    balloons.push({
      id: `silver-grey-${i}`,
      name: "Silver & Grey Balloon",
      slug: "silver-grey-balloons-details",
      price: 10.0,
      description: "14 Colors",
      images: [
        `/images/products/silver-grey/silver-grey-${i
          .toString()
          .padStart(2, "0")}.webp`,
      ],
      category: {
        type: "color-balloons",
        color: "silver-grey",
      },
      inStock: true,
      stock: 100,
      sku: `SILVER-GREY-${i.toString().padStart(3, "0")}`,
      tags: ["silver", "grey", "balloon"],
    });
  }
  return balloons;
};

export const silverGreyBalloons: Product[] = createSilverGreyBalloons();

export const getSilverGreyBalloons = (): Product[] => {
  return silverGreyBalloons;
};
