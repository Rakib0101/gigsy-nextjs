import { Product } from "../products";

const createStarProducts = () => {
  const products = [];
  for (let i = 1; i <= 78; i++) {
    products.push({
      id: `star-${i}`,
      name: "Star Balloon",
      slug: "star-details",
      price: 12.0,
      description: "Perfect for star",
      images: [
        `/images/products/stars/star-${i.toString().padStart(2, "0")}.webp`,
      ],
      category: {
        type: "shape",
        shape: "star",
      },
      inStock: true,
      stock: 100,
      sku: `STAR_${i.toString().padStart(3, "0")}`,
      tags: ["star", "balloon"],
    });
  }
  return products;
};

export const starProducts: Product[] = createStarProducts();

export const getStarProducts = (): Product[] => {
  return starProducts;
};
