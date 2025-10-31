import { Product } from "../products";

const createRainbowsProducts = () => {
  const products = [];
  for (let i = 1; i <= 67; i++) {
    products.push({
      id: `rainbows-${i}`,
      name: "Rainbows Balloon",
      slug: "rainbows-details",
      price: 12.0,
      description: "Perfect for rainbows",
      images: [`/images/products/rainbows/rainbows-${i.toString().padStart(2, "0")}.webp`],
      category: {
        type: "theme",
        theme: "rainbows",
      },
      inStock: true,
      stock: 100,
      sku: `RAINBOWS_${i.toString().padStart(3, "0")}`,
      tags: ["rainbows", "balloon"],
    });
  }
  return products;
};

export const rainbowsProducts: Product[] = createRainbowsProducts();

export const getRainbowsProducts = (): Product[] => {
  return rainbowsProducts;
};
