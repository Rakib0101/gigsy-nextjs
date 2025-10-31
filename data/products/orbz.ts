import { Product } from "../products";

const createOrbzProducts = () => {
  const products = [];
  for (let i = 1; i <= 45; i++) {
    products.push({
      id: `orbz-${i}`,
      name: "Orbz Balloon",
      slug: "orbz-details",
      price: 12.0,
      description: "Perfect for orbz",
      images: [`/images/products/orbz/orbz-${i.toString().padStart(2, "0")}.webp`],
      category: {
        type: "shape",
        shape: "orbz",
      },
      inStock: true,
      stock: 100,
      sku: `ORBZ_${i.toString().padStart(3, "0")}`,
      tags: ["orbz", "balloon"],
    });
  }
  return products;
};

export const orbzProducts: Product[] = createOrbzProducts();

export const getOrbzProducts = (): Product[] => {
  return orbzProducts;
};
