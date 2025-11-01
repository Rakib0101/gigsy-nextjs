import { Product } from "../products";

const createRaceCarProducts = () => {
  const products = [];
  for (let i = 1; i <= 2; i++) {
    products.push({
      id: `race-car-${i}`,
      name: "Race Car Balloon",
      slug: "race-car-details",
      price: 12.0,
      description: "Perfect for race car",
      images: [
        `/images/products/race-car/race-car-${i
          .toString()
          .padStart(2, "0")}.webp`,
      ],
      category: {
        type: "theme",
        theme: "race-car",
      },
      inStock: true,
      stock: 100,
      sku: `RACE_CAR_${i.toString().padStart(3, "0")}`,
      tags: ["race-car", "balloon"],
    });
  }
  return products;
};

export const racecarProducts: Product[] = createRaceCarProducts();

export const getRaceCarProducts = (): Product[] => {
  return racecarProducts;
};
