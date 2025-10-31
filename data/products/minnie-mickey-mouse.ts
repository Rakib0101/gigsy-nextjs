import { Product } from "../products";

const createMinnieMickeyMouseProducts = () => {
  const products = [];
  for (let i = 1; i <= 42; i++) {
    products.push({
      id: `minnie-mickey-mouse-${i}`,
      name: "Minnie & Mickey Mouse Balloon",
      slug: "minnie-mickey-mouse-details",
      price: 12.0,
      description: "Perfect for minnie & mickey mouse",
      images: [`/images/products/minnie-mickey-mouse/minnie-mickey-mouse-${i.toString().padStart(2, "0")}.webp`],
      category: {
        type: "theme",
        theme: "minnie-mickey-mouse",
      },
      inStock: true,
      stock: 100,
      sku: `MINNIE_MICKEY_MOUSE_${i.toString().padStart(3, "0")}`,
      tags: ["minnie-mickey-mouse", "balloon"],
    });
  }
  return products;
};

export const minniemickeymouseProducts: Product[] = createMinnieMickeyMouseProducts();

export const getMinnieMickeyMouseProducts = (): Product[] => {
  return minniemickeymouseProducts;
};
