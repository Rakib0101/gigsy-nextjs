import { Product } from "../products";

const createUnicornProducts = () => {
  const products = [];
  for (let i = 1; i <= 5; i++) {
    products.push({
      id: `unicorn-${i}`,
      name: "Unicorn Balloon",
      slug: "unicorn-details",
      price: 12.0,
      description: "Perfect for unicorn",
      images: [
        `/images/products/unicorn/unicorn-${i
          .toString()
          .padStart(2, "0")}.webp`,
      ],
      category: {
        type: "theme",
        theme: "unicorn",
      },
      inStock: true,
      stock: 100,
      sku: `UNICORN_${i.toString().padStart(3, "0")}`,
      tags: ["unicorn", "balloon"],
    });
  }
  return products;
};

export const unicornProducts: Product[] = createUnicornProducts();

export const getUnicornProducts = (): Product[] => {
  return unicornProducts;
};
