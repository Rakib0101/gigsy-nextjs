import { Product } from "../products";

const createAnimalsProducts = () => {
  const products = [];
  for (let i = 1; i <= 15; i++) {
    products.push({
      id: `animals-${i}`,
      name: "Animals Balloon",
      slug: "animals-details",
      price: 12.0,
      description: "Perfect for animals",
      images: [
        `/images/products/animal-insects/animal-insects-${i
          .toString()
          .padStart(2, "0")}.webp`,
      ],
      category: {
        type: "theme",
        theme: "animals",
      },
      inStock: true,
      stock: 100,
      sku: `ANIMALS_${i.toString().padStart(3, "0")}`,
      tags: ["animals", "balloon"],
    });
  }
  return products;
};

export const animalsProducts: Product[] = createAnimalsProducts();

export const getAnimalsProducts = (): Product[] => {
  return animalsProducts;
};
