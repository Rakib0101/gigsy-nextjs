import { Product } from "../products";

const createAnniversaryProducts = () => {
  const products = [];
  for (let i = 1; i <= 6; i++) {
    products.push({
      id: `anniversary-${i}`,
      name: "Anniversary Balloon",
      slug: "anniversary-details",
      price: 12.0,
      description: "Perfect for anniversary",
      images: [
        `/images/products/annivesary/annivesary-${i
          .toString()
          .padStart(2, "0")}.webp`,
      ],
      category: {
        type: "occasion",
        occasion: "anniversary",
      },
      inStock: true,
      stock: 100,
      sku: `ANNIVERSARY_${i.toString().padStart(3, "0")}`,
      tags: ["anniversary", "balloon"],
    });
  }
  return products;
};

export const anniversaryProducts: Product[] = createAnniversaryProducts();

export const getAnniversaryProducts = (): Product[] => {
  return anniversaryProducts;
};
