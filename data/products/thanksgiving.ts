import { Product } from "../products";

const createThanksgivingProducts = () => {
  const products = [];
  for (let i = 1; i <= 1; i++) {
    products.push({
      id: `thanksgiving-${i}`,
      name: "Thanksgiving Balloon",
      slug: "thanksgiving-details",
      price: 12.0,
      description: "Perfect for thanksgiving",
      images: [`/images/products/thanks-giving/thanks-giving-${i.toString().padStart(2, "0")}.webp`],
      category: {
        type: "holiday",
        holiday: "thanksgiving",
      },
      inStock: true,
      stock: 100,
      sku: `THANKSGIVING_${i.toString().padStart(3, "0")}`,
      tags: ["thanksgiving", "balloon"],
    });
  }
  return products;
};

export const thanksgivingProducts: Product[] = createThanksgivingProducts();

export const getThanksgivingProducts = (): Product[] => {
  return thanksgivingProducts;
};
