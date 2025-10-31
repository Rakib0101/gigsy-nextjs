import { Product } from "../products";

const createBoyBirthdayProducts = () => {
  const products = [];
  for (let i = 1; i <= 48; i++) {
    products.push({
      id: `boy-birthday-${i}`,
      name: "Boy Birthday Balloon",
      slug: "boy-birthday-details",
      price: 12.0,
      description: "Perfect for boy birthday",
      images: [`/images/products/boy-birthday/boy-birthday-${i.toString().padStart(2, "0")}.webp`],
      category: {
        type: "occasion",
        occasion: "boy-birthday",
      },
      inStock: true,
      stock: 100,
      sku: `BOY_BIRTHDAY_${i.toString().padStart(3, "0")}`,
      tags: ["boy-birthday", "balloon"],
    });
  }
  return products;
};

export const boybirthdayProducts: Product[] = createBoyBirthdayProducts();

export const getBoyBirthdayProducts = (): Product[] => {
  return boybirthdayProducts;
};
