import { Product } from "../products";

const createFoilShapes = () => {
  const balloons = [];
  for (let i = 1; i <= 38; i++) {
    balloons.push({
      id: `foil-shape-${i}`,
      name: "Foil Shape Balloon",
      slug: "foil-shapes-details",
      price: 18.0,
      description: "Beautiful foil balloon in various shapes",
      images: [
        `/images/products/foil-shapes/foil-${i
          .toString()
          .padStart(2, "0")}.webp`,
      ],
      category: {
        type: "foil-shapes",
      },
      inStock: true,
      stock: 100,
      sku: `FOIL-${i.toString().padStart(3, "0")}`,
      tags: ["foil", "balloon", "shapes"],
    });
  }
  return balloons;
};

export const foilShapes: Product[] = createFoilShapes();

export const getFoilShapes = (): Product[] => {
  return foilShapes;
};
