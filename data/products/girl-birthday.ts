import { Product } from "../products";

const createGirlBirthdayProducts = () => {
  const products = [];
  for (let i = 1; i <= 18; i++) {
    products.push({
      id: `girl-birthday-${i}`,
      name: "Girl Birthday Balloon",
      slug: "girl-birthday-details",
      price: 12.0,
      description: "Perfect for girl birthday",
      images: [
        `/images/products/girl-birthday/girl-birthday-${i
          .toString()
          .padStart(2, "0")}.webp`,
      ],
      category: {
        type: "occasion",
        occasion: "girl-birthday",
      },
      inStock: true,
      stock: 100,
      sku: `GIRL_BIRTHDAY_${i.toString().padStart(3, "0")}`,
      tags: ["girl-birthday", "balloon"],
    });
  }
  return products;
};

export const girlbirthdayProducts: Product[] = createGirlBirthdayProducts();

export const getGirlBirthdayProducts = (): Product[] => {
  return girlbirthdayProducts;
};
