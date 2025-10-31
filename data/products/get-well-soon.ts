import { Product } from "../products";

const createGetWellSoonProducts = () => {
  const products = [];
  for (let i = 1; i <= 22; i++) {
    products.push({
      id: `get-well-soon-${i}`,
      name: "Get Well Soon Balloon",
      slug: "get-well-soon-details",
      price: 12.0,
      description: "Perfect for get well soon",
      images: [`/images/products/get-well-soon/get-well-soon-${i.toString().padStart(2, "0")}.webp`],
      category: {
        type: "occasion",
        occasion: "get-well-soon",
      },
      inStock: true,
      stock: 100,
      sku: `GET_WELL_SOON_${i.toString().padStart(3, "0")}`,
      tags: ["get-well-soon", "balloon"],
    });
  }
  return products;
};

export const getwellsoonProducts: Product[] = createGetWellSoonProducts();

export const getGetWellSoonProducts = (): Product[] => {
  return getwellsoonProducts;
};
