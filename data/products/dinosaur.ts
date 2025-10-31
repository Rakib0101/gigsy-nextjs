import { Product } from "../products";

const createDinosaurProducts = () => {
  const products = [];
  for (let i = 1; i <= 38; i++) {
    products.push({
      id: `dinosaur-${i}`,
      name: "Dinosaur Balloon",
      slug: "dinosaur-details",
      price: 12.0,
      description: "Perfect for dinosaur",
      images: [`/images/products/dinosaur/dinosaur-${i.toString().padStart(2, "0")}.webp`],
      category: {
        type: "theme",
        theme: "dinosaur",
      },
      inStock: true,
      stock: 100,
      sku: `DINOSAUR_${i.toString().padStart(3, "0")}`,
      tags: ["dinosaur", "balloon"],
    });
  }
  return products;
};

export const dinosaurProducts: Product[] = createDinosaurProducts();

export const getDinosaurProducts = (): Product[] => {
  return dinosaurProducts;
};
