import { Product } from "../products";

const createWelcomeHomeProducts = () => {
  const products = [];
  for (let i = 1; i <= 2; i++) {
    products.push({
      id: `welcome-home-${i}`,
      name: "Welcome Home Balloon",
      slug: "welcome-home-details",
      price: 12.0,
      description: "Perfect for welcome home",
      images: [
        `/images/products/welcome-home/welcome-home-${i
          .toString()
          .padStart(2, "0")}.webp`,
      ],
      category: {
        type: "occasion",
        occasion: "welcome-home",
      },
      inStock: true,
      stock: 100,
      sku: `WELCOME_HOME_${i.toString().padStart(3, "0")}`,
      tags: ["welcome-home", "balloon"],
    });
  }
  return products;
};

export const welcomehomeProducts: Product[] = createWelcomeHomeProducts();

export const getWelcomeHomeProducts = (): Product[] => {
  return welcomehomeProducts;
};
