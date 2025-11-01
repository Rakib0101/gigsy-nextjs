import { Product } from "../products";

const createFourthOfJulyProducts = () => {
  const products = [];
  for (let i = 1; i <= 2; i++) {
    products.push({
      id: `4th-of-july-${i}`,
      name: "4th of July Balloon",
      slug: "4th-of-july-details",
      price: 12.0,
      description: "Perfect for 4th of july",
      images: [
        `/images/products/4th-of-july/4th-of-july-${i
          .toString()
          .padStart(2, "0")}.webp`,
      ],
      category: {
        type: "holiday",
        holiday: "4th-of-july",
      },
      inStock: true,
      stock: 100,
      sku: `4TH_OF_JULY_${i.toString().padStart(3, "0")}`,
      tags: ["4th-of-july", "balloon"],
    });
  }
  return products;
};

export const fourthOfJulyProducts: Product[] = createFourthOfJulyProducts();

export const getFourthOfJulyProducts = (): Product[] => {
  return fourthOfJulyProducts;
};
