import { Product } from "../products";

const createBackToSchool = () => {
  const products = [];
  for (let i = 1; i <= 12; i++) {
    products.push({
      id: `back-to-school-${i}`,
      name: "Back to School Balloon",
      slug: "back-to-school-details",
      price: 12.0,
      description: "Perfect for back to school celebrations",
      images: [
        `/images/products/back-to-school/back-to-school-${i
          .toString()
          .padStart(2, "0")}.webp`,
      ],
      category: {
        type: "occasion",
        occasion: "back-to-school",
      },
      inStock: true,
      stock: 100,
      sku: `BTS-${i.toString().padStart(3, "0")}`,
      tags: ["back-to-school", "balloon", "education"],
    });
  }
  return products;
};

export const backToSchoolProducts: Product[] = createBackToSchool();

export const getBackToSchoolProducts = (): Product[] => {
  return backToSchoolProducts;
};
