import { Product } from "../products";

const createPlanesProducts = () => {
  const products = [];
  for (let i = 1; i <= 2; i++) {
    products.push({
      id: `planes-${i}`,
      name: "Planes Balloon",
      slug: "planes-details",
      price: 12.0,
      description: "Perfect for planes",
      images: [`/images/products/fire-truck/fire-truck-${i.toString().padStart(2, "0")}.webp`],
      category: {
        type: "theme",
        theme: "planes",
      },
      inStock: true,
      stock: 100,
      sku: `PLANES_${i.toString().padStart(3, "0")}`,
      tags: ["planes", "balloon"],
    });
  }
  return products;
};

export const planesProducts: Product[] = createPlanesProducts();

export const getPlanesProducts = (): Product[] => {
  return planesProducts;
};
