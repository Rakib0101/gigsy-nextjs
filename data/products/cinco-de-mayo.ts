import { Product } from "../products";

const createCincodeMayoProducts = () => {
  const products = [];
  for (let i = 1; i <= 19; i++) {
    products.push({
      id: `cinco-de-mayo-${i}`,
      name: "Cinco de Mayo Balloon",
      slug: "cinco-de-mayo-details",
      price: 12.0,
      description: "Perfect for cinco de mayo",
      images: [`/images/products/cinco-de-mayo/cinco-de-mayo-${i.toString().padStart(2, "0")}.webp`],
      category: {
        type: "holiday",
        holiday: "cinco-de-mayo",
      },
      inStock: true,
      stock: 100,
      sku: `CINCO_DE_MAYO_${i.toString().padStart(3, "0")}`,
      tags: ["cinco-de-mayo", "balloon"],
    });
  }
  return products;
};

export const cincodemayoProducts: Product[] = createCincodeMayoProducts();

export const getCincodeMayoProducts = (): Product[] => {
  return cincodemayoProducts;
};
