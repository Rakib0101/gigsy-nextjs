import { Product } from "../products";

const createLOLSurpriseProducts = () => {
  const products = [];
  for (let i = 1; i <= 28; i++) {
    products.push({
      id: `lol-surprise-${i}`,
      name: "LOL Surprise Balloon",
      slug: "lol-surprise-details",
      price: 12.0,
      description: "Perfect for lol surprise",
      images: [`/images/products/lol-surprise/lol-surprise-${i.toString().padStart(2, "0")}.webp`],
      category: {
        type: "theme",
        theme: "lol-surprise",
      },
      inStock: true,
      stock: 100,
      sku: `LOL_SURPRISE_${i.toString().padStart(3, "0")}`,
      tags: ["lol-surprise", "balloon"],
    });
  }
  return products;
};

export const lolsurpriseProducts: Product[] = createLOLSurpriseProducts();

export const getLOLSurpriseProducts = (): Product[] => {
  return lolsurpriseProducts;
};
