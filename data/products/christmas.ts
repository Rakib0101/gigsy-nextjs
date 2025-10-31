import { Product } from "../products";

const createChristmasProducts = () => {
  const products = [];
  for (let i = 1; i <= 89; i++) {
    products.push({
      id: `christmas-${i}`,
      name: "Christmas Balloon",
      slug: "christmas-details",
      price: 12.0,
      description: "Perfect for christmas",
      images: [`/images/products/christmas/christmas-${i.toString().padStart(2, "0")}.webp`],
      category: {
        type: "holiday",
        holiday: "christmas",
      },
      inStock: true,
      stock: 100,
      sku: `CHRISTMAS_${i.toString().padStart(3, "0")}`,
      tags: ["christmas", "balloon"],
    });
  }
  return products;
};

export const christmasProducts: Product[] = createChristmasProducts();

export const getChristmasProducts = (): Product[] => {
  return christmasProducts;
};
