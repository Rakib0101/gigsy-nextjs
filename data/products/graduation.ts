import { Product } from "../products";

const createGraduationProducts = () => {
  const products = [];
  for (let i = 1; i <= 31; i++) {
    products.push({
      id: `graduation-${i}`,
      name: "Graduation Balloon",
      slug: "graduation-details",
      price: 12.0,
      description: "Perfect for graduation",
      images: [`/images/products/graduation/graduation-${i.toString().padStart(2, "0")}.webp`],
      category: {
        type: "occasion",
        occasion: "graduation",
      },
      inStock: true,
      stock: 100,
      sku: `GRADUATION_${i.toString().padStart(3, "0")}`,
      tags: ["graduation", "balloon"],
    });
  }
  return products;
};

export const graduationProducts: Product[] = createGraduationProducts();

export const getGraduationProducts = (): Product[] => {
  return graduationProducts;
};
